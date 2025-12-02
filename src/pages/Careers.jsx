// src/pages/Careers.jsx
import React, { useState } from 'react';
import content from '../data/siteContent.json';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Calendar, Users } from 'lucide-react';

export default function Careers(){
  const c = content.careers;
  const [focused, setFocused] = useState(null); // hovered/open card index

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO / TOP */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* soft patterned bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-90"></div>
          <div
            className="absolute inset-0 opacity-6"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23fce7ef' stroke-width='1'%3E%3Cpath d='M0 0 L80 0 80 80'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="max-w-[var(--max-w-site)] mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-red-100 text-red-600 px-5 py-2 rounded-full mb-6 font-semibold shadow"
            >
              <Briefcase className="w-4 h-4" />
              Careers @ Caarapace
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="text-lg text-slate-700 max-w-2xl mx-auto"
            >
              {c.intro}
            </motion.p>
          </div>
        </div>
      </section>

      {/* OPENINGS - big cards with roomy layout */}
      <section className="section max-w-[var(--max-w-site)] mx-auto px-6 pb-12">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left column - openings list */}
            <div>
              <h2 className="text-2xl font-black mb-4">Current Openings</h2>
              <p className="text-slate-600 mb-6">We're hiring people who move fast, ship great work and keep learning.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                {c.openings.map((o, idx) => (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    onMouseEnter={() => setFocused(idx)}
                    onMouseLeave={() => setFocused(null)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-400 cursor-pointer overflow-hidden bg-white ${
                      focused === idx ? 'card-focus shadow-2xl scale-102' : 'hover:shadow-lg'
                    }`}
                    aria-labelledby={`job-${idx}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-rose-500 text-white flex items-center justify-center text-xl font-bold">
                        {o.title.split(' ').slice(0,2).map(t=>t[0]).join('')}
                      </div>
                      <div style={{flex:1}}>
                        <h3 id={`job-${idx}`} className={`font-bold text-lg ${focused===idx ? 'text-red-600' : 'text-slate-900'}`}>{o.title}</h3>
                        <p className="text-sm text-slate-600 mt-2">{o.desc}</p>
                        <div className="mt-4 flex items-center gap-3">
                          <a
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold border-2 border-red-100 hover:bg-red-50 text-red-600 transition"
                            href={`mailto:info@caarapace.com?subject=Application%20for%20${encodeURIComponent(o.title)}`}
                          >
                            Apply Now
                            <Mail className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => alert(`Thanks — submitted interest for "${o.title}". (demo)`)}
                            className="px-4 py-2 rounded-md bg-white border hover:shadow transition text-sm"
                          >
                            Quick Interest
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Decorative accent that animates on hover/focus */}
                    <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-br from-red-50 to-rose-50 opacity-0 transform rotate-45 transition-all" style={{pointerEvents:'none'}} />
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Right column - visual + why join */}
            <div>
              <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="p-8 rounded-3xl bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-8 h-8" />
                  <div>
                    <div className="text-sm uppercase opacity-80">Why work with us</div>
                    <div className="text-2xl font-black">Ownership. Impact. Growth.</div>
                  </div>
                </div>

                <ul className="grid gap-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calendar className="w-5 h-5 text-white/90" />
                    </div>
                    <div>
                      <div className="font-bold">Flexible hours & modern stack</div>
                      <div className="text-sm opacity-90">Work where you do your best work.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <Briefcase className="w-5 h-5 text-white/90" />
                    </div>
                    <div>
                      <div className="font-bold">Ownership & growth</div>
                      <div className="text-sm opacity-90">Ship features, run projects, learn fast.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1">
                      <Mail className="w-5 h-5 text-white/90" />
                    </div>
                    <div>
                      <div className="font-bold">Great benefits</div>
                      <div className="text-sm opacity-90">Competitive pay, learning budget, and flexible leaves.</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <a href={`mailto:${content.site.email}`} className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-full font-black hover:scale-105 transition transform">
                    Send CV
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Visual / image card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-8 rounded-3xl overflow-hidden border-4 border-red-50 shadow-xl">
                <img
                  src="/src/assets/careers-hero.jpg"
                  alt="Careers"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/src/assets/placeholder-innovative.svg'; }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY JOIN - fuller details */}
      <section className="section-sm max-w-[var(--max-w-site)] mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-red-100 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-black">Why join Caarapace?</h3>
            <p className="text-slate-600 mt-2">Work on real problems, build trust, ship fast, and grow quickly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h4 className="font-bold mb-2">Ownership</h4>
              <p className="text-sm text-slate-600">Drive outcomes and see the impact of your work.</p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h4 className="font-bold mb-2">Growth</h4>
              <p className="text-sm text-slate-600">Mentorship, training budget and stretch projects.</p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow-xl transition">
              <h4 className="font-bold mb-2">Culture</h4>
              <p className="text-sm text-slate-600">A team that ships, supports and celebrates together.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="text-3xl md:text-4xl font-black text-white mb-3">Think you'd be a great fit?</h4>
            <p className="text-red-100 mb-6">Send a short note and your CV — we reply fast.</p>
            <a href={`mailto:${content.site.email}`} className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-full font-black hover:scale-105 transition">
              Apply Now
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
