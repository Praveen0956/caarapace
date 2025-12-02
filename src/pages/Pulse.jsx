// src/pages/Pulse.jsx
import React, { useState, useEffect } from 'react';
import content from '../data/siteContent.json';
import { motion } from 'framer-motion';
import { Activity, BarChart3, TrendingUp, Eye, Target, Sparkles, ArrowRight, LineChart, Users, Clock, FileText } from 'lucide-react';

export default function Pulse(){
  const p = content.pulse || {};
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { icon: <Activity className="w-8 h-8" />, title: "Real-Time Monitoring", value: "99.9%", desc: "Uptime & health" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Performance Analytics", value: "10x", desc: "Faster decisioning" },
    { icon: <Eye className="w-8 h-8" />, title: "Full Visibility", value: "360°", desc: "All systems in view" },
    { icon: <Target className="w-8 h-8" />, title: "Goal Tracking", value: "100%", desc: "OKRs & targets" }
  ];

  const features = [
    { title: "Live Dashboard", desc: "Monitor everything in real-time with beautiful visualizations", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Smart Alerts", desc: "Get notified instantly when something needs attention", icon: <Activity className="w-6 h-6" /> },
    { title: "Custom Reports", desc: "Generate detailed reports with just a few clicks", icon: <LineChart className="w-6 h-6" /> }
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 bg-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-6 py-3 rounded-full mb-8 font-bold shadow-lg">
              <Activity className="w-5 h-5 animate-pulse" />
              <span>Pulse — Your Business Heartbeat</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Keep Your Finger On The Pulse
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-prose mx-auto">
              Real-time analytics that help you make better decisions, faster — live dashboards, alerts, performance trends and HR insights.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-3 rounded-full font-black hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-3 group">
                Try Live Demo
                <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-full font-black hover:bg-red-50 transition-all hover:scale-105">
                Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Metrics */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-white to-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div key={idx} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.08}} className={`group bg-gradient-to-br from-white to-red-50 rounded-3xl p-6 shadow-lg border-2 transition-all ${activeMetric===idx?'border-red-500 scale-105':'border-red-100 hover:border-red-300'}`} onMouseEnter={()=>setActiveMetric(idx)}>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-red-600 to-rose-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow">{metric.icon}</div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.title}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HR & People Ops section */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-red-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-4">
                  <Users className="w-4 h-4" />
                  HR & People Ops
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-4">Centralized HR Insights</h2>
                <p className="text-gray-700 mb-6">
                  Give HR the dashboard they actually want: attendance, time-off, payroll overview, headcount trends, and talent heatmaps — all in one place.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Clock className="w-5 h-5" /></div>
                    <div>
                      <div className="font-semibold">Attendance & Time Tracking</div>
                      <div className="text-sm text-gray-600">Realtime clock-ins, geo-fencing and overtime calculations.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><FileText className="w-5 h-5" /></div>
                    <div>
                      <div className="font-semibold">Payroll & Compensation Insights</div>
                      <div className="text-sm text-gray-600">Automated payroll exports, tax-ready reports and salary band analysis.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><TrendingUp className="w-5 h-5" /></div>
                    <div>
                      <div className="font-semibold">People Analytics</div>
                      <div className="text-sm text-gray-600">Turn engagement and performance data into actionable HR decisions.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600"><Eye className="w-5 h-5" /></div>
                    <div>
                      <div className="font-semibold">Compliance & Audit Trails</div>
                      <div className="text-sm text-gray-600">Secure logs, role-based access and exportable audit history for reviews.</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full font-bold">Request HR Demo</button>
                  <button className="px-6 py-3 border-2 border-red-200 rounded-full">Get Pricing</button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl blur-lg bg-gradient-to-r from-red-200 to-pink-200 opacity-30" />
                <div className="relative p-6 bg-white rounded-2xl border shadow-lg">
                  {/* small mockup grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 animate-pulse" />
                    <div className="h-24 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 animate-pulse" />
                    <div className="h-24 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 animate-pulse" />
                    <div className="h-24 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 animate-pulse" />
                  </div>

                  <div className="mt-2 text-sm text-gray-600">Live preview — HR dashboard cards, headcount, payroll snapshot and alerts.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-[var(--max-w-site)] mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black">Features That Matter</h3>
            <p className="text-gray-600">Everything you need to monitor, analyze and act.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div key={idx} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.08}} className="group bg-white rounded-2xl p-6 border-2 border-red-100 hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-red-600 to-rose-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">{feature.icon}</div>
                <h4 className="font-bold">{feature.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Ready to Get Started?</h3>
            <p className="text-red-100 mb-6">Get real-time insights and take control of your business pulse.</p>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-black hover:scale-105">Get Started Free</button>
            <button className="bg-white/20 text-white px-8 py-3 rounded-full border border-white/20">Talk to Sales</button>
          </div>
        </div>
      </section>
    </main>
  );
}
