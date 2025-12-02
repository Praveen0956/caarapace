// src/components/MapScroller.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MapScroller({ steps = [], initialIndex = 0 }){
  const containerRef = useRef(null);
  const [active, setActive] = useState(initialIndex);

  useEffect(()=>{
    const els = containerRef.current?.querySelectorAll('.map-node');
    if(!els) return;
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const idx = Number(entry.target.getAttribute('data-idx'));
          setActive(idx);
        }
      });
    }, { threshold: 0.5 });
    els.forEach(el=>observer.observe(el));
    return ()=> observer.disconnect();
  }, []);

  return (
    <div className="map-scroller" ref={containerRef}>
      <div className="map-line" />
      <div className="grid">
        {steps.map((s,idx)=>(
          <div key={idx} className={`map-node ${idx===active ? 'is-active' : ''}`} data-idx={idx}>
            <div className="map-bubble">{idx+1}</div>
            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay: idx*0.06}} className="p-4 rounded-lg bg-white border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="text-lg font-semibold">{s.title}</div>
                  {s.subtitle && <div className="text-sm text-slate-600 mt-1">{s.subtitle}</div>}
                  <div className="mt-3 text-slate-700">{s.text}</div>
                </div>
                {s.image && (
                  <div className="w-36">
                    <div className="image-card">
                      <img src={s.image} alt={s.title} />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="mt-6 progress-pill"><i style={{width: `${Math.round(((active+1)/steps.length)*100)}%`}} /></div>
    </div>
  );
}
