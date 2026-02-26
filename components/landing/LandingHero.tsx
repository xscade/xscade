"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export function LandingHero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pb-0 overflow-hidden bg-background">
      {/* Dotted Surface Background Shader */}
      <DottedSurface className="absolute inset-0 z-0 opacity-50" />
      
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
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          Software Delivery at<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Light Speed
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium"
        >
          AI + Humans ship production-grade software 10x faster
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center pointer-events-auto mt-8"
        >
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/25 bg-blue-600 hover:bg-blue-700 text-white">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}