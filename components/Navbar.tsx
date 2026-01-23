"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Code2,
  Megaphone,
  Briefcase,
  Users,
  Mail,
} from "lucide-react";

const services = [
  {
    name: "Digital Marketing",
    icon: Megaphone,
    href: "/services/digital-marketing",
    description: "SEO, PPC, Social Media & Content Marketing",
  },
  {
    name: "Software Development",
    icon: Code2,
    href: "/services/software-development",
    description: "Web Apps, Mobile Apps & Custom Solutions",
  },
  {
    name: "Consulting",
    icon: Briefcase,
    href: "/services/consulting",
    description: "Strategy & Business Consulting",
  },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
              Xscade
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/80">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-2 w-72">
                        {services.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-all">
                              <item.icon className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-900">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/80">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100/80">
                Contact
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link href="/contact">
                <Button className="rounded-full font-medium px-5 h-9 text-sm bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  Get Started
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Services</div>
                    <div className="space-y-1">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <item.icon className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-medium text-slate-700">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Company</div>
                    <div className="space-y-1">
                      <Link
                        href="/about"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Users className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">About</span>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Mail className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">Contact</span>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full rounded-full mt-2 bg-primary hover:bg-primary/90">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
