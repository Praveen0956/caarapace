// src/pages/CDeck.jsx
import React, { useState } from 'react';
import content from '../data/siteContent.json';
import RevealPanel from '../components/RevealPanel.jsx';
import { motion } from 'framer-motion';
import { Layers, Zap, TrendingUp, Shield, Sparkles, ArrowRight, CheckCircle, Play } from 'lucide-react';

export default function CDeck(){
  const d = content.cdeck;
  const [activeFeature, setActiveFeature] = useState(0);

  const features = d.features || [
    { title: "Feature 1", desc: "Description 1" },
    { title: "Feature 2", desc: "Description 2" },
    { title: "Feature 3", desc: "Description 3" }
  ];

  const stats = [
    { value: "10x", label: "Faster Workflow" },
    { value: "99.9%", label: "Uptime" },
    { value: "500+", label: "Happy Users" },
    { value: "24/7", label: "Support" }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Optimized for speed and performance" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure & Reliable", desc: "Enterprise-grade security built-in" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Scalable", desc: "Grows with your business needs" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Modern UI", desc: "Beautiful, intuitive interface" }
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section - Split Screen with Animation */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-3 rounded-full mb-8 font-bold shadow-lg">
              <Layers className="w-5 h-5" />
              <span>Introducing C-Deck</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                {d.title || "C-Deck"}
              </span>
            </h1>

            <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
              {d.tagline || "The ultimate solution for modern businesses. Streamline your workflow and boost productivity."}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full font-black hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 group">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-black hover:bg-red-50 transition-all hover:scale-105">
                Get Started Free
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Visual/Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block w-1/2 h-screen relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6' stroke='%23FFF' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>

            {/* Floating Dashboard Preview */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500 w-full max-w-lg">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-gradient-to-r from-red-100 to-rose-100 rounded-xl animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-white to-rose-50 border-y-2 border-red-100">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-default"
              >
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Interactive Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">Everything you need to succeed, all in one place</p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeFeature === idx
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg scale-105'
                    : 'bg-white border-2 border-red-200 text-gray-700 hover:border-red-400'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Active Feature Content */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-red-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {features[activeFeature].desc}
                </p>
                <button className="inline-flex items-center gap-2 text-red-600 font-bold text-lg hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="h-64 bg-gradient-to-br from-red-200 to-rose-200 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid - FIXED RED GRADIENT */}
      <section className="py-20 relative overflow-hidden">
        {/* FIXED Background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)`
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
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Why Choose C-Deck?
              </h2>
              <p className="text-xl text-gray-600">Built for the modern enterprise</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 border-2 border-red-100 hover:border-red-400 hover:shadow-xl transition-all group"
                >
                  <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reveal Panels */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <RevealPanel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-red-100 mb-8">
              Join thousands of teams already using C-Deck to transform their workflow.
            </p>
            <button className="bg-white text-red-600 px-10 py-4 rounded-full font-black hover:bg-red-50 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}