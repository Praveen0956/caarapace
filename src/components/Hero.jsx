// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  function scrollToContact() {
    const el = document.getElementById('contact-section');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      // fallback: open mail
      window.location.href = 'mailto:info@caarapace.com';
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-rose-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-red-200 text-red-600 px-6 py-3 rounded-full mb-8 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>Yo, we're literally NOT your basic tech agency</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              Caarapace
            </span>
            <span className="block text-gray-900 mt-2">
              We Build Digital Magic ✨
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            At Caarapace, we don't just build websites — we craft{' '}
            <span className="text-red-600 font-bold">chef's kiss</span>, custom solutions that are giving{' '}
            <span className="text-red-600 font-bold">main character energy</span> for your business journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => navigate('/services')}
              className="group bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full font-black hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-black hover:bg-red-50 transition-all hover:scale-105"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* NOTE: removed the three floating stat badges as requested */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
