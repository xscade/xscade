"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
    name: string;
}

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl,
    backgroundImageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&h=1600&fit=crop&q=80",
    navLinks = [],
    ctaButtonText = "Get Started",
    ctaButtonHref = "/contact",
    badgeLabel = "New",
    badgeText = "Transform Your Digital Presence",
    title = "Digital Marketing",
    titleLine2 = "That Drives Results",
    description = "We deliver cutting-edge digital marketing strategies and custom solutions that drive growth, engagement, and measurable results for your business.",
    primaryButtonText = "Get Started",
    primaryButtonHref = "/contact",
    secondaryButtonText = "Watch Demo",
    secondaryButtonHref = "#",
    partnersTitle = "Trusted by leading brands worldwide",
    partners = [
        { logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80", href: "#", name: "Partner 1" },
        { logoUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=100&fit=crop&q=80", href: "#", name: "Partner 2" },
        { logoUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop&q=80", href: "#", name: "Partner 3" },
        { logoUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop&q=80", href: "#", name: "Partner 4" },
        { logoUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&q=80", href: "#", name: "Partner 5" }
    ]
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImageUrl}
                    alt="Digital Marketing Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
            </div>
            
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />

            {/* Header */}
            <header className="z-10 xl:top-4 relative">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4">
                        {logoUrl ? (
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded"
                                style={{ backgroundImage: `url(${logoUrl})` }}
                            />
                        ) : (
                            <Link
                                href="/"
                                className="text-xl font-semibold tracking-tight text-white"
                            >
                                Xscade
                            </Link>
                        )}

                        {navLinks.length > 0 && (
                            <>
                                <nav className="hidden md:flex items-center gap-2">
                                    <div className="flex items-center gap-1 rounded-full bg-white/10 px-1 py-1 ring-1 ring-white/20 backdrop-blur-md">
                                        {navLinks.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className={`px-3 py-2 text-sm font-medium hover:text-white transition-colors ${
                                                    link.isActive ? 'text-white' : 'text-white/80'
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        <Link
                                            href={ctaButtonHref}
                                            className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-primary hover:bg-white/90 transition-colors"
                                        >
                                            {ctaButtonText}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </nav>

                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md"
                                    aria-expanded={mobileMenuOpen}
                                    aria-label="Toggle menu"
                                >
                                    {mobileMenuOpen ? (
                                        <X className="h-5 w-5 text-white" />
                                    ) : (
                                        <Menu className="h-5 w-5 text-white" />
                                    )}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && navLinks.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 md:hidden"
                    >
                        <div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="p-6 pt-20">
                                <div className="space-y-6">
                                    {navLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                                                link.isActive 
                                                    ? 'bg-primary/10 text-primary' 
                                                    : 'text-slate-700 hover:bg-slate-100'
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="pt-4 border-t border-slate-200">
                                        <Link 
                                            href={ctaButtonHref} 
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block w-full text-center rounded-full bg-primary text-white px-4 py-3 font-medium hover:bg-primary/90 transition-colors"
                                        >
                                            {ctaButtonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Content */}
            <div className="z-10 relative">
                <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/20 backdrop-blur-md animate-fade-slide-in-1">
                            <span className="inline-flex items-center text-xs font-medium text-white bg-primary rounded-full py-0.5 px-2">
                                {badgeLabel}
                            </span>
                            <span className="text-sm font-medium text-white/90">
                                {badgeText}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-bold animate-fade-slide-in-2">
                            {title}
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                                {titleLine2}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/90 max-w-2xl mt-6 mx-auto leading-relaxed">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
                            <Link
                                href={primaryButtonHref}
                                className="inline-flex items-center gap-2 hover:bg-primary/90 text-sm font-medium text-white bg-primary ring-white/20 ring-1 rounded-full py-3 px-6 transition-colors shadow-lg shadow-primary/20"
                            >
                                {primaryButtonText}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:text-white ring-1 ring-white/20 backdrop-blur-md transition-colors"
                            >
                                {secondaryButtonText}
                                <Play className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Partners Section */}
                    {partners.length > 0 && (
                        <div className="mx-auto mt-20 max-w-5xl">
                            <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center">
                                {partnersTitle}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-white/70 mt-6 items-center justify-items-center gap-4">
                                {partners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-20 opacity-80 hover:opacity-100 transition-opacity ring-1 ring-white/10"
                                    >
                                        <img
                                            src={partner.logoUrl}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
