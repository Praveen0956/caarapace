// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const videoRef = useRef(null);
  const [isMuted, setMuted] = useState(true);
  const [isPlaying, setPlaying] = useState(true);

  // Update this to your video path (place video in src/assets/hero-video.mp4)
  const videoSrc = "/src/assets/hero-video.mp4";

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMouse({ x, y });
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = ((y - cy) / cy) * 6; // rotateX
      const ry = ((x - cx) / cx) * -6; // rotateY
      setTilt({ rx, ry });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nm = !isMuted;
    videoRef.current.muted = nm;
    setMuted(nm);
  };

  const handleLetsTalk = (e) => {
    e?.preventDefault?.();
    const form = document.querySelector("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = form.querySelector("input, textarea, button");
      firstInput?.focus?.();
    } else {
      navigate("/contact");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-rose-50">
      <style>{`
        /* dot grid */
        .hero-dot-grid { background-image: radial-gradient(rgba(239,68,68,0.03) 1px, transparent 1px); background-size: 28px 28px; }
        /* animated swirl ring */
        .swirl-svg { mix-blend-mode: screen; filter: blur(6px); opacity: 0.9; }
        /* subtle floating keyframes */
        @keyframes floatSlow { 0% { transform: translateY(0) } 50% { transform: translateY(-18px) } 100% { transform: translateY(0) } }
        @keyframes floatAlt { 0% { transform: translateY(0) } 50% { transform: translateY(12px) } 100% { transform: translateY(0) } }
        .float-slow { animation: floatSlow 9s ease-in-out infinite; }
        .float-alt { animation: floatAlt 11s ease-in-out infinite; }
        /* large orb mask */
        .orb-mask { clip-path: circle(50% at 50% 50%); transition: clip-path .5s cubic-bezier(.2,.9,.2,1); }
        .orb-mask:hover { clip-path: circle(54% at 50% 50%); }
      `}</style>

      {/* back decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -left-40 top-16 w-[520px] h-[520px] bg-red-400 rounded-full mix-blend-multiply blur-3xl opacity-24"
        />
        <motion.div
          animate={{ x: [0, -36, 0], y: [0, 32, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
          className="absolute right-8 top-28 w-[420px] h-[420px] bg-rose-400 rounded-full mix-blend-multiply blur-3xl opacity-22"
        />
      </div>

      {/* main container */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-28 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* left: text */}
        <div className="w-full lg:w-7/12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border-2 border-red-100 text-red-700 px-5 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-semibold text-sm">Not your basic tech agency</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="block text-red-600">Caarapace</span>
              <span className="block text-gray-900">Design-led products that convert</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-prose mb-8">
              Custom websites, CRMs, apps and marketing — polished for performance and built for growth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-[1.03] transition-transform"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleLetsTalk}
                className="inline-flex items-center gap-3 border-2 border-red-600 text-red-600 px-5 py-3 rounded-full font-bold bg-white hover:bg-red-50 transition"
              >
                Let's Talk
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="bg-white/90 px-4 py-2 rounded-full border border-red-100 shadow-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-600" /> <span className="text-sm font-medium">Fast & SEO-ready</span>
              </div>
              <div className="bg-white/90 px-4 py-2 rounded-full border border-red-100 shadow-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-red-600" /> <span className="text-sm font-medium">Growth-first</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* right: larger animated orb */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative w-[520px] h-[520px] orb-mask overflow-hidden rounded-full"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 0.12s linear"
            }}
          >
            {/* rotating ring overlay */}
            <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full swirl-svg pointer-events-none">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffccd5" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#ff5a7a" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ff99ad" stopOpacity="0.85" />
                </linearGradient>
                <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="10" result="b" />
                  <feBlend in="SourceGraphic" in2="b" mode="screen" />
                </filter>
              </defs>
              <g filter="url(#soft)">
                <path d="M260 20 C 400 20, 500 140, 500 260 C 500 380, 380 500, 260 500 C 140 500, 20 380, 20 260 C 20 140, 120 20, 260 20 Z"
                  fill="none" stroke="url(#ringGrad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                  <animateTransform attributeName="transform" type="rotate" from="0 260 260" to="360 260 260" dur="26s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>

            {/* background vignette and subtle bloom */}
            <div className="absolute inset-0 rounded-full pointer-events-none">
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0.02))" }} />
            </div>

            {/* floating spark particles */}
            <div className="absolute -left-8 -top-8 w-20 h-20 rounded-full bg-red-500/16 blur-xl float-slow" />
            <div className="absolute right-6 top-12 w-12 h-12 rounded-full bg-rose-500/14 blur-lg float-alt" />
            <div className="absolute bottom-10 left-12 w-14 h-14 rounded-full bg-pink-300/12 blur-lg float-slow" />

            {/* video container */}
            <div className="absolute inset-6 rounded-full border border-white/20 shadow-2xl overflow-hidden bg-black/4">
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                muted={isMuted}
                loop
                autoPlay
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={(e) => {
                  // Hide video if missing; decorative fallback remains visible
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* subtle overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.06))" }} />
            </div>

            {/* controls pill */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-red-100 font-semibold text-sm shadow-md hover:scale-105 transition"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </button>

              <button
                onClick={toggleMute}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-red-100 text-sm shadow-md hover:scale-105 transition"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
