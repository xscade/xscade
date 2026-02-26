"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LandingHero } from "@/components/landing/LandingHero";
import { SplineScene } from "@/components/SplineScene";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { motion } from "framer-motion";
import { 
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
  Shield,
  Globe,
  Lock,
  Database,
  Eye,
  Box
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AgenticAgileLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-medium">
        🚀 Flat 10% Off on Your First Sprint – Valid for this month. <Link href="/contact" className="underline underline-offset-2 hover:text-blue-100">Book a Call Now</Link>
      </div>
      
      <Navbar />
      <LandingHero />
      
      {/* Trusted By Section */}
      <section className="py-12 border-b border-border/40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-8">Trusted by Leading Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Placeholder Logos */}
            <h3 className="text-2xl font-bold">TechCorp</h3>
            <h3 className="text-2xl font-bold tracking-tighter">GLOBAL<span className="font-light">SYS</span></h3>
            <h3 className="text-2xl font-bold italic">InnovateX</h3>
            <h3 className="text-2xl font-bold">Nexa<span className="text-blue-600">Cloud</span></h3>
            <h3 className="text-2xl font-bold tracking-widest">AERIS</h3>
          </div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Too Many Tools.<br />
                <span className="text-muted-foreground">Not Enough ROI.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Data is fragmented, workflows are disconnected, and decisions are still bottlenecked in manual operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "No More Bottlenecks", desc: "Teams ask live system questions in natural language, with safe access controls.", icon: Zap },
                { title: "One Trusted View", desc: "Connect scattered data into a single governed source of truth.", icon: Globe },
                { title: "ROI From Tools", desc: "Deploy agents on top of existing data lakes to drive real workflows.", icon: TrendingUp },
                { title: "Safe AI Outputs", desc: "LLMs are constrained with code and human checks for predictable results.", icon: Shield },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-muted/50 border border-border"
                >
                  <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The New Physics of Software Delivery */}
      <section className="py-24 px-4 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">The New Physics of Software Delivery.<br />10x Faster.</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              This is Agentic Agile. Where proprietary AI agents augment elite engineers to develop at superhuman speed. Strategy no longer waits for execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Without Xscade */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white/50">Traditional Teams</h3>
              <div className="space-y-4">
                {["PRD Creation", "Task Creation", "Code Implementation", "QA Testing", "DevOps"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <Clock className="w-5 h-5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-4xl font-bold text-white/80">1 Week</div>
            </motion.div>

            {/* With Xscade */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl text-blue-900 transform md:scale-110 z-10"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-600">With Xscade Agents</h3>
              <div className="space-y-4">
                {["AI PRD Creation", "Agentic Task Creation", "Parallel Code Implementation", "Automated QA", "Instant DevOps"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-blue-100 text-5xl font-bold text-blue-600">1 Day</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process: 10x Speed To Production */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">10x Speed To Production.<br />By Design.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use an outcome-driven delivery model where AI-native engineers and internal agent systems work in parallel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "System Review", desc: "We align early on the problem, constraints, and decision flow before execution begins." },
              { num: "02", title: "Weekly Delivery", desc: "Work progresses in steady weekly increments, with continuous integration and reviews." },
              { num: "03", title: "Production", desc: "Security, reliability, and operational readiness are built in from the start." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-3xl border border-border"
              >
                <div className="text-4xl font-light text-blue-600/30 mb-6">{step.num}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Spline Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-900 via-blue-950 to-background overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 flex items-start justify-center pt-24 z-0 pointer-events-none opacity-5">
          <h2 className="text-8xl md:text-[12rem] font-bold text-white select-none whitespace-nowrap">
            AI AGENTS
          </h2>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-white">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Our System of<br />AI Agents
            </h2>
            <p className="text-xl text-blue-200 max-w-lg">
              Built in-house, help you move 10x faster. AI agents power our entire sprint engine. They write specs, spin code, design UI, and catch bugs.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8 font-medium">
                View Security Model
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full h-[450px] md:h-[550px] flex items-center justify-center -mb-12">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-[1.2]"
            />
          </div>
        </div>
      </section>

      {/* Security Model */}
      <section className="py-24 px-4 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Speed Without Compromising Control</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our delivery model is designed to move fast inside enterprise constraints, not around them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: Lock, title: "Client-Controlled", desc: "Systems run in your approved infrastructure. You control access." },
            { icon: Database, title: "No Data Retention", desc: "Client data is never reused or used for model training." },
            { icon: Eye, title: "Observable Systems", desc: "Actions, decisions, and workflows can be logged and audited." },
            { icon: Box, title: "No Black Boxes", desc: "We do not deploy opaque systems that teams can't inspect." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-muted/30 rounded-2xl border border-border/50 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-xl mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* We Don't Just Claim, We Prove */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Don't Just Claim.<br /><span className="text-blue-600">We Prove.</span></h2>
            <p className="text-xl text-muted-foreground mb-8">
              Progress accelerates when outcomes are fixed, systems are built weekly, and production requirements are handled early.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Outcomes, Not Hours", desc: "Fixed weekly outcomes eliminate planning drag." },
                { title: "AI-Native Engineering Team", desc: "Senior engineers trained to ship real systems, not experiments." },
                { title: "Built for Production", desc: "Enterprise constraints are addressed early, not after 'success'." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-blue-600" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Welcome to the AI-powered era of software delivery.</h3>
            <p className="text-blue-100 mb-8 relative z-10 text-lg">
              Book a free strategy session and get a sprint roadmap, tailored to your goals.
            </p>
            <Link href="/contact" className="relative z-10 inline-block">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg text-blue-700 font-bold hover:bg-white/90">
                Book a Call Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}