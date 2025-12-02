import React from 'react';
import content from '../data/siteContent.json';

export default function Footer(){
  const site = content.site;
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-[var(--max-w-site)] mx-auto px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-800 font-medium">{site.title} — Empowering businesses with innovative tech solutions.</div>
          <div>Contact: <a href={`mailto:${site.email}`} className="underline">{site.email}</a></div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div>© 2025 CAARAPACE INC. All Rights Reserved.</div>
          <div className="text-slate-600">Company — Home | Services | Careers | About</div>
        </div>
      </div>
    </footer>
  );
}
