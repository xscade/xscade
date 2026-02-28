"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";
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
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pb-0 overflow-hidden bg-background">
      {/* Dotted Surface Background Shader */}
      <DottedSurface className="absolute inset-0 z-0" />

      {/* Background Effects */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Main Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

        {/* Floating Gradients */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[100px]"
        />

        {/* Glassmorphic Overlay Effect */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 pointer-events-none">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-md font-medium pointer-events-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Agentic Agile — AI Agents That Ship Real Code
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          Software Delivery{" "}
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <motion.span
              key={rotatingWord}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            >
              {rotatingWord}
            </motion.span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Our AI agents and elite engineers work in parallel to deliver
          production-grade software in days, not months. Strategy no longer waits for execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center pointer-events-auto"
        >
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="#security-model">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base hover:bg-muted">
              See How It Works
            </Button>
          </Link>
        </motion.div>

        {/* Footer Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 pt-8 pb-4 md:pb-0 text-sm text-muted-foreground font-medium"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>10x Faster Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>500+ Projects Shipped</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>98% Client Retention</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
