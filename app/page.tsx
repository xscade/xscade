"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { SplineScene } from "@/components/SplineScene";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Zap
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and ROI for all our services."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with proven track records in their fields."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodologies ensure quick turnaround times without compromising quality."
  },
];

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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Xscade
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
}
