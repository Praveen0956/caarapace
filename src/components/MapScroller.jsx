// src/components/MapScroller.jsx
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

export default function MapScroller({ steps = [], initialIndex = 0 }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [active, setActive] = useState(initialIndex);
  const [svgHeight, setSvgHeight] = useState(900); // larger default to ensure reach
  const [leftX, setLeftX] = useState(56);
  const [rightX, setRightX] = useState(320);

  // spacing increased so curve comfortably reaches 4th node
  const stepSpacing = 440;

  // Observe which node is in view
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.map-node');
    if (!els) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-idx'));
          setActive(idx);
        }
      });
    }, { threshold: 0.55 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [steps]);

  // compute svg height and responsive left/right x coords
  function computeLayout() {
    const totalH = Math.max(600, 60 + (steps.length - 1) * stepSpacing + 120);
    setSvgHeight(totalH);

    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < 900) {
      setLeftX(36);
      setRightX(Math.max(180, Math.round(vw * 0.35)));
    } else if (vw < 1200) {
      setLeftX(46);
      setRightX(280);
    } else {
      setLeftX(56);
      setRightX(320);
    }
  }

  useLayoutEffect(() => {
    computeLayout();
    const onResize = () => computeLayout();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps.length]);

  // build a smooth zig-zag path that connects all nodes
  function buildPath() {
    let d = '';
    for (let i = 0; i < steps.length; i++) {
      const y = 60 + i * stepSpacing;
      const x = (i % 2 === 0) ? leftX : rightX;
      if (i === 0) {
        d += `M ${x} ${y}`;
      } else {
        const prevY = 60 + (i - 1) * stepSpacing;
        const prevX = ((i - 1) % 2 === 0) ? leftX : rightX;
        const midY = (prevY + y) / 2;
        // gentle quadratic curve between nodes
        d += ` Q ${prevX} ${midY} ${x} ${y}`;
      }
    }
    return d;
  }

  // set stroke dasharray/length on mount and when path changes
  useEffect(() => {
    const t = setTimeout(() => {
      if (!pathRef.current) return;
      try {
        const len = Math.max(1, Math.floor(pathRef.current.getTotalLength()));
        pathRef.current.style.strokeDasharray = len;
        // set an initial dashoffset that will update via inline style below
        pathRef.current.style.strokeDashoffset = len;
      } catch (err) {
        // ignore
      }
    }, 60);
    return () => clearTimeout(t);
  }, [svgHeight, leftX, rightX, steps.length]);

  // progress fraction based on active index
  const progress = Math.min(1, (active + 1) / Math.max(1, steps.length));
  // determine dashoffset dynamically (we will compute length each render if available)
  let dashOffsetStyle = {};
  if (pathRef.current) {
    try {
      const total = Math.max(1, Math.floor(pathRef.current.getTotalLength()));
      dashOffsetStyle = { strokeDashoffset: Math.round(total * (1 - progress)), transition: 'stroke-dashoffset .55s cubic-bezier(.2,.9,.2,1)' };
    } catch (e) {
      dashOffsetStyle = {};
    }
  }

  return (
    <div className="map-scroller" ref={containerRef} style={{ position: 'relative', paddingBottom: 48 }}>
      {/* Left SVG Zig-zag */}
      <div style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', width: 420 }}>
        <svg width="420" height={svgHeight} viewBox={`0 0 420 ${svgHeight}`} preserveAspectRatio="xMinYMin">
          <defs>
            <linearGradient id="zigGradSmall" x1="0" x2="1">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          {/* faint background path */}
          <path d={buildPath()} stroke="rgba(239,68,68,0.06)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          {/* animated gradient stroke */}
          <path
            ref={pathRef}
            d={buildPath()}
            stroke="url(#zigGradSmall)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              ...dashOffsetStyle,
              filter: 'drop-shadow(0 12px 24px rgba(239,68,68,0.06))'
            }}
          />
        </svg>
      </div>

      {/* Right side list/cards with offset so SVG fits */}
      <div style={{ paddingLeft: 460 }}>
        <div style={{ display: 'grid', gap: 32 }}>
          {steps.map((s, idx) => (
            <div key={idx} className="map-node" data-idx={idx} style={{ paddingTop: 8, paddingBottom: 8 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 80, display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 999, background: idx === active ? 'linear-gradient(135deg,#ef4444,#fb7185)' : '#fca5a5',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                  }}>{idx + 1}</div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ flex: 1 }}
                >
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{s.title}</div>
                  {s.subtitle && <div style={{ color: '#6b7280', marginTop: 6 }}>{s.subtitle}</div>}
                  <div style={{ marginTop: 12, color: '#374151' }}>{s.text}</div>
                  {s.image && (
                    <div style={{ marginTop: 12, height: 160, borderRadius: 12, overflow: 'hidden', background: '#fff5f5', border: '1px solid #fee2e2' }}>
                      <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* small progress bar */}
        <div style={{ marginTop: 20 }}>
          <div style={{ height: 8, background: 'rgba(239,68,68,0.06)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ width: `${Math.round(progress * 100)}%`, height: '100%', background: 'linear-gradient(90deg,#ef4444,#fb7185)', transition: 'width .45s ease' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
