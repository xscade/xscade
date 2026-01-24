"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ArrowRight,
  Sparkles,
  Megaphone,
  Code2,
  Briefcase,
  TrendingUp,
  Rocket,
  Target,
  Users,
  BarChart3,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Quick Links
const quickLinks = {
  services: [
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Business Consulting", href: "/services/consulting" },
    { name: "AI Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

// Social Links
const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
                <p className="text-white/70 max-w-md">
                  Get updates on new services, industry insights, and business tips. No spam, unsubscribe anytime.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-6 rounded-xl bg-white text-primary hover:bg-white/90 font-medium"
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                  {!subscribed && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
              <div>
                <Link href="/" className="text-2xl font-bold tracking-tight">
                  Xscade
                </Link>
                <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xs">
                  Professional digital marketing and software development services. Transforming businesses with innovative solutions.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/20 transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Services Highlight */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm">Get Started</span>
                </div>
                <p className="text-xs text-white/60 mb-3">
                  Ready to transform your business? Let's discuss your project.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-white/90 hover:text-white inline-flex items-center gap-1"
                >
                  Contact Us <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Services</h4>
              <ul className="space-y-3">
                {quickLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Company</h4>
              <ul className="space-y-3">
                {quickLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Legal</h4>
              <ul className="space-y-3">
                {quickLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Showcase */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50">Our Services</h4>
              <Link href="/services" className="text-xs text-white/70 hover:text-white inline-flex items-center gap-1">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Digital Marketing", icon: Megaphone, href: "/services/digital-marketing" },
                { name: "Software Development", icon: Code2, href: "/services/software-development" },
                { name: "Business Consulting", icon: Briefcase, href: "/services/consulting" },
                { name: "SEO Optimization", icon: TrendingUp, href: "/services/digital-marketing" },
                { name: "Web Development", icon: Rocket, href: "/services/software-development" },
                { name: "Strategy Consulting", icon: Target, href: "/services/consulting" },
                { name: "Analytics & Insights", icon: BarChart3, href: "/services" },
                { name: "AI Solutions", icon: Sparkles, href: "/services" },
                { name: "Fast Delivery", icon: Zap, href: "/services" },
                { name: "Expert Team", icon: Users, href: "/about" },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs"
                >
                  <service.icon className="w-3 h-3 text-white/50 group-hover:text-white/70" />
                  <span className="text-white/70 group-hover:text-white">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/50">
                © {new Date().getFullYear()} Xscade. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-4 text-xs text-white/50">
                  <Link href="/site-map" className="hover:text-white/70 transition-colors">Sitemap</Link>
                  <Link href="/accessibility" className="hover:text-white/70 transition-colors">Accessibility</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
