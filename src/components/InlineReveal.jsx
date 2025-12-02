// src/components/InlineReveal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InlineReveal({
  open,
  item = {},
  index = 0,
  total = 1,
  onClose = () => {},
  onNext = () => {},
  onPrev = () => {},
  imageSrc = ''
}) {
  useEffect(() => {
    function handleKey(e) {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose, onNext, onPrev]);

  const letter = String.fromCharCode(65 + (index % 26));

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          key="inline-reveal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.36 }}
          className="inline-reveal"
        >
          {/* OUTER: animated gradient outline + spacing from top cards */}
          <div className="inline-reveal-outer">
            {/* INNER panel (white background) */}
            <div className="inline-reveal-panel max-w-[var(--max-w-site)] mx-auto px-6 py-10 lg:py-12 rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-rose-500 text-white flex items-center justify-center font-bold text-2xl shadow-xl">
                      {letter}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{item.title || 'Detail'}</h3>
                      <div className="text-sm text-slate-600 mt-1">Expanded view · Approach · Deliverables</div>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="mt-6 text-slate-700 leading-relaxed">
                    <p className="mb-6">{item.text || 'No description available.'}</p>

                    <ul className="mt-4 list-disc ml-5 text-slate-600 space-y-2">
                      <li><strong>Approach:</strong> design sprints, prototypes, build & iterate.</li>
                      <li><strong>Deliverables:</strong> UI, frontend, backend APIs, analytics.</li>
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href="mailto:info@caarapace.com" className="btn-primary">Start a project</a>
                      <button onClick={() => alert('Request demo (stub)')} className="px-4 py-2 rounded-md border">Request demo</button>
                    </div>
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.08 }} className="relative">
                  {/* Image or placeholder */}
                  {imageSrc ? (
                    <div className="image-card rounded-xl overflow-hidden border-2 border-red-100 shadow-lg">
                      <img
                        src={imageSrc}
                        alt={`${item.title || 'visual'}`}
                        className="w-full h-72 object-cover"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/src/assets/placeholder-innovative.svg'; }}
                      />
                    </div>
                  ) : (
                    <div className="p-6 rounded-lg border bg-white h-72 flex items-center justify-center">
                      <svg width="80%" height="80%" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                        <rect width="300" height="200" rx="12" fill="#fff"/>
                        <rect x="16" y="18" width="268" height="30" rx="6" fill="#fff5f6"/>
                        <rect x="16" y="62" width="200" height="14" rx="4" fill="#fff"/>
                        <rect x="16" y="86" width="140" height="10" rx="3" fill="#fff"/>
                        <circle cx="250" cy="80" r="14" fill="#fde8ec"/>
                      </svg>
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-2 justify-end">
                    <button onClick={onPrev} className="px-3 py-2 rounded border hover:bg-slate-50">◀ Prev</button>
                    <button onClick={onNext} className="px-3 py-2 rounded border hover:bg-slate-50">Next ▶</button>
                    <button onClick={onClose} className="px-3 py-2 rounded border hover:bg-slate-50">Close ✕</button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
