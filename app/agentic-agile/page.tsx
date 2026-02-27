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
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white text-center py-2.5 px-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider">Limited</span>
          Flat 10% Off on Your First Sprint – Valid for this month.
          <Link href="/contact" className="underline underline-offset-2 hover:text-blue-100 font-semibold">
            Book a Call Now <ArrowRight className="inline w-3 h-3" />
          </Link>
        </span>
      </div>

      <Navbar />
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
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-blue-600" />
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30 text-sm font-medium text-red-600 dark:text-red-400">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Too Many Tools.<br />
                <span className="text-muted-foreground">Not Enough ROI.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Data is fragmented, workflows are disconnected, and decisions are still bottlenecked in manual operations. Your team deserves better.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600" />
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
      <section className="py-28 px-4 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-6">
              Agentic Agile
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The New Physics of<br />Software Delivery
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Where proprietary AI agents augment elite engineers to develop at superhuman speed. Strategy no longer waits for execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Traditional Teams */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white/60" />
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
                  <span className="ml-auto px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">10x Faster</span>
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
            <p className="text-blue-200 text-lg">
              That's <span className="text-white font-bold">80% less time</span> from concept to production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process: 10x Speed To Production */}
      <section className="py-28 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground mb-6">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">10x Speed To Production.<br />By Design.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              An outcome-driven delivery model where AI-native engineers and internal agent systems work in parallel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                icon: Search,
                title: "System Review",
                desc: "We align early on the problem, constraints, and decision flow before execution begins. No surprises down the line.",
                details: ["Problem definition", "Constraint mapping", "Architecture review"]
              },
              {
                num: "02",
                icon: Rocket,
                title: "Weekly Delivery",
                desc: "Work progresses in steady weekly increments with continuous integration, reviews, and stakeholder demos.",
                details: ["Sprint planning", "Continuous integration", "Weekly demos"]
              },
              {
                num: "03",
                icon: FileCheck,
                title: "Production Ready",
                desc: "Security, reliability, and operational readiness are built in from the start — not bolted on after.",
                details: ["Security audit", "Performance testing", "Deployment automation"]
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-background p-8 md:p-10 rounded-3xl border border-border hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-3xl font-bold text-blue-600/20">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>
                <ul className="mt-auto space-y-2">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-600/60 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80">
              Proprietary Technology
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Our System of<br />AI Agents
            </h2>
            <p className="text-xl text-blue-200 max-w-lg leading-relaxed">
              Built in-house to help you move 10x faster. AI agents power our entire sprint engine — they write specs, generate code, design UI, and catch bugs before humans even review.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Spec Writing", "Code Generation", "UI Design", "QA Testing", "DevOps"].map((capability) => (
                <span key={capability} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/70">
                  {capability}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="#security-model">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8 font-medium">
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
      <section id="security-model" className="py-28 px-4 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground mb-6">
              Enterprise Security
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Speed Without Compromising Control</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our delivery model is designed to move fast inside enterprise constraints, not around them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {[
              { icon: Lock, title: "Client-Controlled", desc: "Systems run in your approved infrastructure. You own the access, keys, and controls at every layer." },
              { icon: Database, title: "No Data Retention", desc: "Client data is never stored, reused, or used for model training. Zero data leakage by design." },
              { icon: Eye, title: "Observable Systems", desc: "Every action, decision, and workflow can be logged, traced, and audited in real time." },
              { icon: Box, title: "No Black Boxes", desc: "We do not deploy opaque systems. Every component can be inspected, reviewed, and understood." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-7 bg-card rounded-2xl border border-border hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-blue-50 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center rounded-2xl mb-5 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Don't Just Claim, We Prove */}
      <section className="py-28 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground mb-6">
              Why Xscade
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">We Don't Just Claim.<br /><span className="text-blue-600">We Prove.</span></h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
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
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-foreground">{item.title}</h3>
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
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 md:p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Welcome to the AI-powered era of software delivery.</h3>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
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
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block w-full">
                <Button size="lg" variant="secondary" className="w-full rounded-full px-8 h-14 text-lg text-blue-700 font-bold hover:bg-white/90">
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
