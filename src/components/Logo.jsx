// src/components/Logo.jsx
import React from 'react';
import content from '../data/siteContent.json';
import mark from '/src/assets/logo-mark.png';
import wordmark from '/src/assets/caarapace-wordmark.png';

export default function Logo(){
  const s = content.site;
  return (
    <div className="flex items-center gap-3">
      {/* mark */}
      <img src={mark} alt={`${s.title} mark`} className="w-10 h-10 object-contain" />

      {/* wordmark (use wherever CAARAPACE text appears) */}
      <img src={wordmark} alt={s.title} className="hidden sm:inline-block h-6 object-contain" />

      {/* fallback text for small screens or if image missing */}
      <div className="ml-2 text-lg font-bold tracking-tight sm:hidden" style={{color:'var(--brand)'}}>
        {s.title}
      </div>
    </div>
  );
}
