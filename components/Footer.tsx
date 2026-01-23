"use client";

import React from 'react';
import Link from 'next/link';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Megaphone,
} from 'lucide-react';

const quickLinks = {
  services: [
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Consulting", href: "/services/consulting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
              <div>
                <Link href="/" className="text-2xl font-bold tracking-tight">
                  Xscade
                </Link>
                <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xs">
                  Professional digital marketing and software development services. 
                  Transforming businesses with innovative solutions.
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
                  <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
