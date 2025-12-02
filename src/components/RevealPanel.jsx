// src/components/RevealPanel.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RevealPanel({ open, onClose, item = {}, index = 0, total = 1, onNext = () => {}, onPrev = () => {} }) {
  // trap focus when open (basic)
  useEffect(() => {
    if (!open) return;
    const prevActive = document.activeElement;
    const closeEl = document.getElementById('reveal-close-btn');
    closeEl?.focus();
    return () => prevActive?.focus?.();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          key="reveal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.36 }}
          className="mt-8 bg-white border rounded-lg shadow-soft overflow-hidden"
          aria-modal="true"
          role="dialog"
        >
          <div className="max-w-[var(--max-w-site)] mx-auto px-6 py-8">
            <div className="flex items-start justify-between gap-4">
              <div style={{flex:1}}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)] font-bold text-lg">
                    {String.fromCharCode(65 + (index % 26))}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <div className="text-sm text-slate-600 mt-1">Deep dive · Case studies · Visual mockups</div>
                  </div>
                </div>

                <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
                  <div>
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                    <ul className="mt-4 list-disc ml-5 text-slate-600 space-y-2">
                      <li><strong>Outcome:</strong> Faster time-to-market and better conversion funnels.</li>
                      <li><strong>Approach:</strong> Design sprint → Prototype → Build → Optimize.</li>
                      <li><strong>Tech:</strong> React, Node, PostgreSQL (or Firebase for quick MVPs).</li>
                    </ul>

                    <div className="mt-6 flex gap-3 items-center">
                      <a className="btn-primary" href="mailto:info@caarapace.com">Get this done</a>
                      <button onClick={() => alert('Open demo (stub)')} className="px-4 py-2 rounded-md border">Request Demo</button>
                    </div>
                  </div>

                  <div>
                    {/* illustrative area — animated mockup */}
                    <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="p-4 rounded-lg bg-[var(--card-bg)] border">
                      <div className="h-40 flex items-center justify-center text-slate-700">
                        {/* simple SVG mockup */}
                        <svg viewBox="0 0 200 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                          <rect x="6" y="8" width="188" height="104" rx="10" fill="#fff" stroke="#fee2e2" />
                          <rect x="20" y="24" width="160" height="16" rx="4" fill="#fff5f6" />
                          <rect x="20" y="48" width="120" height="10" rx="3" fill="#fff" />
                          <rect x="20" y="66" width="80" height="10" rx="3" fill="#fff" />
                          <circle cx="160" cy="40" r="10" fill="#fde8ec" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end gap-3">
                <div className="flex gap-2 items-center">
                  <button id="reveal-prev" onClick={onPrev} aria-label="Previous" className="px-3 py-2 rounded border hover:bg-slate-50">◀</button>
                  <button id="reveal-next" onClick={onNext} aria-label="Next" className="px-3 py-2 rounded border hover:bg-slate-50">▶</button>
                </div>

                <div>
                  <button id="reveal-close-btn" onClick={onClose} aria-label="Close reveal" className="px-3 py-2 rounded border hover:bg-slate-50">✕</button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
