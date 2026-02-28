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
  Box,
  ArrowRight,
  Rocket,
  BarChart3,
  Users,
  Search,
  FileCheck,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AgenticAgileLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Marquee Banner — fixed right below the navbar */}
      <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 49, height: '20px' }} className="bg-primary overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-white text-[11px] font-medium">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white/20 px-1.5 py-px text-[9px] font-semibold uppercase tracking-wider">Limited</span>
              Flat 10% Off on Your First Sprint – Valid for this month.
              <Link href="/contact" className="underline underline-offset-2 hover:text-blue-100 font-semibold">
                Book a Call Now
              </Link>
              <span className="text-white/40">•</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ height: '20px' }} /> {/* Spacer for marquee below navbar */}
      <LandingHero />

      {/* Stats Bar */}
      <section className="py-10 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "10x", label: "Faster Delivery", icon: Zap },
              { value: "500+", label: "Projects Shipped", icon: Rocket },
              { value: "98%", label: "Client Retention", icon: Users },
              { value: "50+", label: "AI Agents Deployed", icon: BarChart3 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-b border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-10">Trusted by Leading Enterprises</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
          >
            {[
              { name: "TechCorp", style: "font-bold" },
              { name: "GLOBALSYS", style: "font-bold tracking-tighter" },
              { name: "InnovateX", style: "font-bold italic" },
              { name: "NexaCloud", style: "font-bold" },
              { name: "AERIS", style: "font-bold tracking-widest" },
            ].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-6 py-3 rounded-xl bg-background border border-border/60 text-muted-foreground/60 hover:text-muted-foreground hover:border-border transition-all duration-300"
              >
                <span className={`text-lg md:text-xl ${company.style}`}>{company.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="py-28 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-600 mb-2">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Too Many Tools.<br />
                <span className="text-muted-foreground">Not Enough ROI.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Data is fragmented, workflows are disconnected, and decisions are still bottlenecked in manual operations. Your team deserves better.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "No More Bottlenecks", desc: "Teams ask live system questions in natural language, with safe access controls.", icon: Zap },
                { title: "One Trusted View", desc: "Connect scattered data into a single governed source of truth.", icon: Globe },
                { title: "ROI From Your Tools", desc: "Deploy agents on top of existing data lakes to drive real workflows.", icon: TrendingUp },
                { title: "Safe AI Outputs", desc: "LLMs are constrained with code and human checks for predictable results.", icon: Shield },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/10 group-hover:bg-primary/15 transition-colors mb-4">
                    <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The New Physics of Software Delivery */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Agentic Agile
              </span>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-white leading-tight">
                The New Physics of<br />Software Delivery
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
              <p className="text-base text-white/80 leading-relaxed">
                Where proprietary AI agents augment elite engineers to develop at superhuman speed.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch max-w-5xl mx-auto">
            {/* Traditional Teams */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-8 md:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/15 hover:border-white/25 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                  <Clock className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white/50">Traditional Teams</h3>
              </div>
              <div className="space-y-4 flex-1">
                {["PRD Creation", "Manual Task Breakdown", "Sequential Coding", "Manual QA Testing", "Manual DevOps"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/50">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-white/30" />
                    <span className="text-sm">{step}</span>
                    <span className="ml-auto text-xs text-white/30 font-mono">~{[4, 8, 24, 16, 8][i]}hrs</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Total time</div>
                <div className="text-4xl font-bold text-white/60">5–7 Days</div>
              </div>
            </motion.div>

            {/* With Xscade */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-900/30 text-blue-950 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">With Xscade Agents</h3>
                  <span className="ml-auto rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-600 border border-blue-200">
                    10x Faster
                  </span>
                </div>
                <div className="space-y-4 flex-1">
                  {["AI PRD Generation", "Agentic Task Creation", "Parallel Code Implementation", "Automated QA & Testing", "Instant CI/CD Pipeline"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 font-medium text-blue-900">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm">{step}</span>
                      <span className="ml-auto text-xs text-blue-400 font-mono">~{[0.5, 0.5, 4, 2, 0.5][i]}hrs</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-blue-100">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-1">Total time</div>
                  <div className="text-5xl font-bold text-blue-600">1 Day</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Time savings callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-blue-100 text-lg">
              That's <span className="text-white font-bold">80% less time</span> from concept to production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process: 10x Speed To Production */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-blue-100/50 via-blue-50/30 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-600 mb-8">
                OUR PROCESS
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                10x Speed To Production.<br />
                <span className="text-muted-foreground">By Design.</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                An outcome-driven delivery model where AI-native engineers and internal agent systems work in parallel.
              </p>

              <Link href="/contact">
                <Button className="rounded-lg px-6 h-12 text-base font-medium bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  Get Started
                </Button>
              </Link>
            </motion.div>

            {/* Right Side - Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Vertical Line */}
              <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-slate-300" />

              <div className="space-y-12">
                {[
                  {
                    icon: Search,
                    title: "System Review",
                    desc: "We align early on the problem, constraints, and decision flow before execution begins. No surprises down the line.",
                  },
                  {
                    icon: Rocket,
                    title: "Weekly Delivery",
                    desc: "Work progresses in steady weekly increments with continuous integration, reviews, and stakeholder demos.",
                  },
                  {
                    icon: FileCheck,
                    title: "Production Ready",
                    desc: "Security, reliability, and operational readiness are built in from the start — not bolted on after.",
                  }
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex gap-6 relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 z-10">
                      <step.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Spline Section */}
      <section className="relative w-full bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 overflow-hidden pt-24 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-white">
            <span className="text-xs uppercase tracking-[0.35em] text-white/70">
              Proprietary Technology
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Our System of<br />AI Agents
            </h2>
            <p className="text-base text-white/80 max-w-lg leading-relaxed">
              Built in-house to help you move 10x faster. AI agents power our entire sprint engine — they write specs, generate code, design UI, and catch bugs before humans even review.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Spec Writing", "Code Generation", "UI Design", "QA Testing", "DevOps"].map((capability) => (
                <span key={capability} className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 border border-white/10">
                  {capability}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="#security-model">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90 rounded-full px-8 font-medium shadow-lg shadow-blue-900/20">
                  View Security Model
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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
      <section id="security-model" className="relative py-24 px-4 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
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
            className="mb-16 flex flex-col gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Enterprise Security
              </span>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-white leading-tight">
                Speed Without<br />Compromising Control
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
              <p className="text-base text-white/80 leading-relaxed">
                Our delivery model is designed to move fast inside enterprise constraints, not around them.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Lock, title: "CLIENT-CONTROLLED", desc: "Systems run in your approved infrastructure. You own the access, keys, and controls at every layer.", tag: "INFRA" },
              { icon: Database, title: "NO DATA RETENTION", desc: "Client data is never stored, reused, or used for model training. Zero data leakage by design.", tag: "PRIVACY" },
              { icon: Eye, title: "OBSERVABLE SYSTEMS", desc: "Every action, decision, and workflow can be logged, traced, and audited in real time.", tag: "AUDIT" },
              { icon: Box, title: "NO BLACK BOXES", desc: "We do not deploy opaque systems. Every component can be inspected, reviewed, and understood.", tag: "TRUST" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/15 hover:border-white/25 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10 group-hover:bg-white/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <header className="flex items-start gap-3">
                      <h3 className="text-lg font-semibold uppercase tracking-wide text-white">
                        {feature.title}
                      </h3>
                      <span className="ml-auto rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 border border-white/10">
                        {feature.tag}
                      </span>
                    </header>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Don't Just Claim, We Prove */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-blue-100/50 via-blue-50/30 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-600 mb-8">
              WHY XSCADE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
              We Don't Just Claim.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">We Prove.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Progress accelerates when outcomes are fixed, systems are built weekly, and production requirements are handled early.
            </p>

            <div className="space-y-6">
              {[
                { title: "Outcomes, Not Hours", desc: "Fixed weekly outcomes eliminate planning drag. You pay for results, not time." },
                { title: "AI-Native Engineering Team", desc: "Senior engineers trained to ship real systems with AI agents, not run experiments." },
                { title: "Built for Production from Day 1", desc: "Enterprise constraints — security, compliance, scale — are addressed early, not after launch." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="mt-0.5 w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 md:p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Welcome to the AI-powered era of software delivery.</h3>
              <p className="text-white/80 mb-10 text-lg leading-relaxed">
                Book a free strategy session and get a sprint roadmap, tailored to your goals.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-t border-b border-white/15">
                {[
                  { value: "2x", label: "Cost Savings" },
                  { value: "10x", label: "Speed Gain" },
                  { value: "98%", label: "On-Time" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block w-full">
                <Button size="lg" className="w-full rounded-full px-8 h-14 text-lg bg-white text-blue-700 font-bold hover:bg-white/90 shadow-lg shadow-blue-900/20">
                  Book a Call Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
