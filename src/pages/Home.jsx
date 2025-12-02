// src/pages/Home.jsx
import React, { useRef, useState } from 'react';
import Hero from '../components/Hero.jsx';
import content from '../data/siteContent.json';
import InteractiveCard from '../components/InteractiveCard.jsx';
import InlineReveal from '../components/InlineReveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Rocket } from 'lucide-react';

export default function Home(){
  const what = content.whatWeDo;
  const about = content.about;
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const addCardRef = el => { if(el && !cardRefs.current.includes(el)) cardRefs.current.push(el); };

  const [openIndex, setOpenIndex] = useState(null);

  function openReveal(i){
    setOpenIndex(i);
    // scroll the grid into view + offset
    setTimeout(()=>{
      const gridEl = document.querySelector('#what-grid');
      if(gridEl){
        const offset = gridEl.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({top:offset, behavior:'smooth'});
      }
    }, 120);
  }
  function closeReveal(){ setOpenIndex(null); }
  function goNext(){ if(openIndex==null) return; const next=(openIndex+1)%what.items.length; setOpenIndex(next); cardRefs.current[next]?.scrollIntoView({behavior:'smooth', block:'center'}); }
  function goPrev(){ if(openIndex==null) return; const prev=(openIndex-1+what.items.length)%what.items.length; setOpenIndex(prev); cardRefs.current[prev]?.scrollIntoView({behavior:'smooth', block:'center'}); }

  function scrollToContact(){
    const el = document.getElementById('contact-section');
    if(el){
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({top:offset, behavior:'smooth'});
    } else {
      window.location.href = 'mailto:info@caarapace.com';
    }
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* What We Do */}
      <section className="section max-w-[var(--max-w-site)] mx-auto px-6 relative">
        <div className="mb-12 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              {what.heading}
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-xl text-slate-600 max-w-2xl mx-auto">
            {what.subheading}
          </motion.p>
        </div>

        <div id="what-grid" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {what.items.map((it,idx)=>(
            <motion.div key={idx} ref={addCardRef} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <InteractiveCard 
                title={it.title} 
                text={it.text} 
                index={idx} 
                isActive={openIndex===idx} 
                onActivate={(i)=>openReveal(i)} 
                image={null} 
              />
            </motion.div>
          ))}
        </div>

        <InlineReveal 
          open={openIndex!=null} 
          item={openIndex!=null ? what.items[openIndex] : {}} 
          index={openIndex ?? 0} 
          total={what.items.length} 
          onClose={closeReveal} 
          onNext={goNext} 
          onPrev={goPrev} 
          imageSrc={'/src/assets/innovative.jpg'} 
        />
      </section>

      {/* About Section - FIXED RED GRADIENT */}
      <section className="section-lg relative overflow-hidden">
        {/* FIXED Background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6' stroke='%23FFF' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>

        {/* Content with white background card */}
        <div className="max-w-[var(--max-w-site)] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-red-200">
            <div className="alt-row items-center gap-12">
              <div className="text-block">
                <motion.div initial={{opacity:0, x: -30}} whileInView={{opacity:1, x: 0}} className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-2 rounded-full mb-6 font-semibold">
                  <Sparkles className="w-5 h-5" />
                  <span>About Us</span>
                </motion.div>

                <motion.h3 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                  {about.heading}
                </motion.h3>
                
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.12}} className="mt-4 text-gray-700 text-lg leading-relaxed max-w-prose">
                  {about.text}
                </motion.p>
                
                <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity:1, y: 0}} transition={{delay:0.3}} className="mt-8">
                  <button className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full font-black hover:from-red-700 hover:to-rose-700 transition-all hover:scale-105 shadow-xl hover:shadow-2xl group" onClick={scrollToContact}>
                    Let's Talk
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </div>

              <motion.div initial={{opacity:0, x: 30}} whileInView={{opacity:1, x: 0}} className="media-block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-rose-400/20 rounded-3xl blur-2xl group-hover:from-red-400/30 group-hover:to-rose-400/30 transition-all duration-500"></div>
                  <div className="image-card relative overflow-hidden rounded-3xl border-4 border-red-200 shadow-2xl">
                    <img src="/src/assets/innovative.jpg" alt="Innovative" className="h-[420px] object-cover w-full transform group-hover:scale-110 transition-transform duration-700" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/src/assets/placeholder-innovative.svg'; }} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="section max-w-[var(--max-w-site)] mx-auto px-6 relative bg-white">
        <div className="alt-row reverse items-center gap-12 relative z-10">
          <motion.div initial={{opacity:0, x: -30}} whileInView={{opacity:1, x: 0}} className="media-block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="image-card relative overflow-hidden rounded-3xl border-4 border-red-200 shadow-2xl">
                <img src="/src/assets/contact-visual.jpg" alt="Contact" className="h-[360px] object-cover w-full transform group-hover:scale-110 transition-transform duration-700" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/src/assets/placeholder-innovative.svg'; }} />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, x: 30}} whileInView={{opacity:1, x: 0}} className="text-block">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-2 rounded-full mb-6 font-semibold">
              <Rocket className="w-5 h-5" />
              <span>Get Started</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Let's get this show on the road.
            </h3>
            <p className="mt-3 text-lg text-slate-600">Have an idea? Fill the form and we'll get back with a plan and a quote.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-[var(--max-w-site)] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity:1, y: 0}}>
            <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Transform Your Business?</h4>
            <p className="text-xl text-red-100 mb-6">Join hundreds of satisfied clients who chose excellence.</p>
            <button onClick={scrollToContact} className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-black hover:scale-105 transition">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
