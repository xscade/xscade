"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = ["10x Faster", "AI-Powered", "Production-Ready", "Enterprise-Grade"];

function useRotatingText(words: string[], interval = 2800) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);
  return words[index];
}

export function LandingHero() {
  const rotatingWord = useRotatingText(rotatingWords);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#030712]">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0">
        {/* Dark base with noise texture */}
        <div className="absolute inset-0 bg-[#030712]" />

        {/* Large animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[0%] left-[30%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto px-4 pt-32 pb-20">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/70 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 mb-8"
          >
            <span className="flex items-center gap-1.5 text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-semibold text-xs uppercase tracking-wider">New</span>
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span>Agentic Agile Framework — AI agents that ship real code</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          Build Software{" "}
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <motion.span
              key={rotatingWord}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500"
            >
              {rotatingWord}
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed mb-10 font-light"
        >
          Our AI agents and elite engineers work in parallel to deliver{" "}
          <span className="text-white/80 font-medium">production-grade software</span>{" "}
          in days, not months. Strategy no longer waits for execution.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-base font-semibold bg-white text-gray-900 hover:bg-white/90 shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Your First Sprint
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="#security-model">
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-14 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              See How It Works
            </Button>
          </Link>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          {/* Avatar stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                "bg-gradient-to-br from-blue-400 to-blue-600",
                "bg-gradient-to-br from-violet-400 to-violet-600",
                "bg-gradient-to-br from-emerald-400 to-emerald-600",
                "bg-gradient-to-br from-amber-400 to-amber-600",
                "bg-gradient-to-br from-rose-400 to-rose-600",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${bg} border-2 border-[#030712] flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {["A", "S", "M", "R", "K"][i]}
                </div>
              ))}
            </div>
            <div className="text-sm text-white/50">
              <span className="text-white/80 font-semibold">500+</span> projects delivered
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-white/10" />

          {/* Star rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-white/50">
              <span className="text-white/80 font-semibold">98%</span> client retention
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
