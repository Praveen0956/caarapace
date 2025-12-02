// src/pages/Pulse.jsx
import React, { useState, useEffect } from 'react';
import content from '../data/siteContent.json';
import { motion } from 'framer-motion';
import { Activity, BarChart3, TrendingUp, Eye, Target, Sparkles, ArrowRight, LineChart } from 'lucide-react';

export default function Pulse(){
  const p = content.pulse || {};
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { icon: <Activity className="w-8 h-8" />, title: "Real-Time Monitoring", value: "99.9%", desc: "Uptime guaranteed" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Performance Analytics", value: "10x", desc: "Faster insights" },
    { icon: <Eye className="w-8 h-8" />, title: "Full Visibility", value: "360°", desc: "Complete overview" },
    { icon: <Target className="w-8 h-8" />, title: "Goal Tracking", value: "100%", desc: "Achievement rate" }
  ];

  const features = [
    { title: "Live Dashboard", desc: "Monitor everything in real-time with beautiful visualizations", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Smart Alerts", desc: "Get notified instantly when something needs attention", icon: <Activity className="w-6 h-6" /> },
    { title: "Custom Reports", desc: "Generate detailed reports with just a few clicks", icon: <LineChart className="w-6 h-6" /> }
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-3 rounded-full mb-8 font-bold shadow-lg">
              <Activity className="w-5 h-5 animate-pulse" />
              <span>Pulse - Your Business Heartbeat</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                Keep Your Finger
              </span>
              <br />
              <span className="text-gray-900">On The Pulse</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
              {p.tagline || "Real-time analytics and insights that help you make better decisions, faster. Monitor, analyze, and optimize your entire operation from one powerful dashboard."}
            </p>

            {/* Live Metric Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-red-200 max-w-2xl mx-auto mb-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Active Users", value: animatedValue },
                  { label: "Uptime", value: "99.9%" },
                  { label: "Response", value: `${Math.floor(animatedValue * 0.2)}ms` },
                  { label: "Success", value: `${animatedValue}%` }
                ].map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600 font-semibold mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full font-black hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-3 group">
                Try Live Demo
                <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-black hover:bg-red-50 transition-all hover:scale-105">
                Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Powerful Metrics
            </h2>
            <p className="text-xl text-gray-600">Track what matters most to your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveMetric(idx)}
                className={`group bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 cursor-pointer ${
                  activeMetric === idx ? 'border-red-500 scale-105' : 'border-red-100 hover:border-red-300'
                }`}
              >
                <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-lg">
                  {metric.icon}
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {metric.value}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{metric.title}</h4>
                <p className="text-gray-600 text-sm">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - FIXED RED GRADIENT */}
      <section className="py-20 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
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
                Features That Matter
              </h2>
              <p className="text-xl text-gray-600">Everything you need to stay ahead</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 border-2 border-red-100 hover:border-red-400 hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">A glimpse of your future dashboard</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border-4 border-red-200 overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-xl backdrop-blur-sm border border-red-500/30 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
              ))}
            </div>
            <div className="h-64 bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-xl backdrop-blur-sm border border-red-500/30"></div>
          </motion.div>
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
              Start Monitoring Today
            </h3>
            <p className="text-xl text-red-100 mb-8">
              Get real-time insights and take control of your business pulse.
            </p>
            <button className="bg-white text-red-600 px-10 py-4 rounded-full font-black hover:bg-red-50 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}