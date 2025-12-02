// src/pages/Services.jsx
import React, { useState } from 'react';
import content from '../data/siteContent.json';
import MapScroller from '../components/MapScroller.jsx';
import { Code, Database, Megaphone, Smartphone, Zap, ArrowRight, Sparkles, CheckCircle, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services(){
  const s = content.servicesLong;
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  
  const steps = [
    { title:'Discovery', subtitle:'Research & Strategy', text:s.items[0].text || 'Discovery text', image:'/src/assets/service-1.jpg' },
    { title:'Design Sprint', subtitle:'UX & Prototype', text:s.items[1].text || 'Design sprint text', image:'/src/assets/service-2.jpg' },
    { title:'Build', subtitle:'Engineering & QA', text:s.items[2].text || 'Build text', image:'/src/assets/service-3.jpg' },
    { title:'Grow', subtitle:'Marketing & Optimization', text:s.items[3].text || 'Grow text', image:'/src/assets/service-4.jpg' },
  ];

  const serviceIcons = [
    <Code className="w-10 h-10" />,
    <Database className="w-10 h-10" />,
    <Megaphone className="w-10 h-10" />,
    <Smartphone className="w-10 h-10" />
  ];

  const iconColors = [
    'from-red-500 to-rose-600',
    'from-rose-500 to-pink-600',
    'from-red-600 to-orange-600',
    'from-rose-600 to-red-700'
  ];

  const whyChooseUs = [
    { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "50+ skilled professionals" },
    { icon: <Rocket className="w-6 h-6" />, title: "Fast Delivery", desc: "On-time project completion" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Quality Assured", desc: "100% satisfaction guarantee" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Innovation First", desc: "Cutting-edge solutions" }
  ];

  return (
    <main className="bg-white relative overflow-hidden">
      {/* Hero Section with 3D Card Effect */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-rose-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #fecaca 1px, transparent 1px), linear-gradient(to bottom, #fecaca 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            opacity: 0.3
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1400ms'}}></div>
        </div>
        
        <div className="section max-w-[var(--max-w-site)] mx-auto px-6 relative z-10">
          <div className="mb-8 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-3 rounded-full mb-6 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Zap className="w-5 h-5 animate-pulse" />
              <span>Literally NOT Your Basic Tech Agency</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                {s.introTitle}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-700 max-w-prose mx-auto font-medium leading-relaxed"
            >
              {s.introText}
            </motion.p>
          </div>

          {/* Why Choose Us - Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
          >
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border-2 border-red-100 rounded-2xl p-4 text-center hover:border-red-400 hover:shadow-xl transition-all hover:scale-105 group"
              >
                <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Tabs */}
      <section className="section max-w-[var(--max-w-site)] mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
            What we build
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            From websites to complex CRMs — we craft solutions that <span className="text-red-600 font-bold">scale</span>.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {s.items.map((it, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-red-100 hover:border-red-400 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${iconColors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating Icon Background */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
                {serviceIcons[index]}
              </div>

              <div className="relative">
                {/* Icon with Glow */}
                <div className="mb-6">
                  <div className="absolute w-20 h-20 bg-red-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                  <div className={`relative bg-gradient-to-br ${iconColors[index]} text-white p-5 rounded-2xl inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {serviceIcons[index]}
                  </div>
                </div>
                
                <h3 className="text-3xl font-black mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {it.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {it.text}
                </p>
                
                <div className="flex items-center text-red-600 font-bold text-lg group-hover:gap-3 gap-2 transition-all">
                  <span>Explore Service</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full"></div>
            </motion.div>
          ))}
        </div>

        {/* *** removed the two decorative badges per your request *** */}

      </section>

      {/* Process Section - FIXED RED GRADIENT */}
      <section className="section-lg relative overflow-hidden py-20">
        {/* FIXED Background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6' stroke='%23FFF' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-[var(--max-w-site)] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-red-200"
          >
            <div className="text-center mb-12">
              <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Our Process
              </h3>
              <p className="text-xl text-gray-600">
                From concept to launch, we've got you covered
              </p>
            </div>
            <MapScroller steps={steps} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-red-600 to-rose-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative z-10">
              <Rocket className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Build Something That Hits Different? 🚀
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Let's turn your vision into reality. Your next big thing starts here.
              </p>
              <button className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-black hover:bg-red-50 transition-all hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group">
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
