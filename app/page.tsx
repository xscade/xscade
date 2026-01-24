"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { SplineScene } from "@/components/SplineScene";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Zap,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe,
  Briefcase,
  MessageSquare,
  Sparkles,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="relative w-full bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-col gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Our Services
              </span>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-white leading-tight">
                Comprehensive Solutions<br />for Your Business
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
              <p className="text-base text-white/80 leading-relaxed">
                Elevate your digital presence and drive business success with our expert services.
              </p>
            </div>
          </motion.div>

          {/* Services Carousel */}
          <ServicesCarousel />
        </div>
      </section>

      {/* Hire AI Agents Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-start justify-center pt-32 z-0 pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-8xl font-bold text-foreground select-none"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.1
            }}
          >
          XSCADE
          </motion.h2>
        </div>

        {/* Robot 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full z-10"
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </section>

      {/* Core Features Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-col gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                CORE FEATURES
              </span>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-white leading-tight">
                Why Choose Us
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
            <p className="text-base text-white/80 leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business.
            </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Target,
                title: "RESULTS-DRIVEN",
                description: "We focus on measurable outcomes and ROI for all our services, ensuring every project delivers tangible business value.",
                tag: "IMPACT"
              },
              {
                icon: Users,
                title: "EXPERT TEAM",
                description: "Experienced professionals with proven track records in digital marketing, software development, and business consulting.",
                tag: "EXPERIENCE"
              },
              {
                icon: Zap,
                title: "FAST DELIVERY",
                description: "Agile methodologies ensure quick turnaround times without compromising quality or attention to detail.",
                tag: "SPEED"
              },
              {
                icon: TrendingUp,
                title: "GROWTH FOCUSED",
                description: "Our strategies are designed to scale your business, increase revenue, and drive sustainable growth.",
                tag: "GROWTH"
              },
              {
                icon: Award,
                title: "PROVEN TRACK RECORD",
                description: "Hundreds of successful projects delivered across industries, with measurable results and satisfied clients.",
                tag: "TRUST"
              },
              {
                icon: BarChart3,
                title: "DATA-DRIVEN INSIGHTS",
                description: "Analytics and performance metrics guide every decision, ensuring optimal results and continuous optimization.",
                tag: "ANALYTICS"
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/15 hover:border-white/25 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10 group-hover:bg-white/20 transition-colors">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <header className="flex items-start gap-3">
                      <h3 className="text-lg font-semibold uppercase tracking-wide text-white">
                        {feature.title}
                      </h3>
                      {feature.tag && (
                        <span className="ml-auto rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 border border-white/10">
                          {feature.tag}
                        </span>
                      )}
                    </header>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Zoom Parallax Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <ZoomParallax 
          images={[
            {
              src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Modern architecture building',
            },
            {
              src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Urban cityscape at sunset',
            },
            {
              src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Abstract geometric pattern',
            },
            {
              src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Mountain landscape',
            },
            {
              src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Minimalist design elements',
            },
            {
              src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Ocean waves and beach',
            },
            {
              src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Forest trees and sunlight',
            },
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}
