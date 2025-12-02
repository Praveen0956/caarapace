import React from 'react';
import content from '../data/siteContent.json';

export default function Logo(){
  const s = content.site;
  return (
    <div className="flex items-center gap-3">
      <img src="/src/assets/logo.svg" alt={s.title} className="w-10 h-10 object-contain" />
      <div className="text-lg font-bold tracking-tight" style={{color:'var(--brand)'}}>{s.title}</div>
    </div>
  );
}
