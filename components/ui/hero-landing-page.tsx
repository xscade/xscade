'use client'

import { useEffect, useState } from "react"
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import Link from "next/link"

interface HeroLandingPageProps {
  title?: string;
  titleLine2?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  videoUrl?: string;
  backgroundImageUrl?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

export function HeroLandingPage({
  title = "Accelerate your",
  titleLine2 = "AGI deployment",
  subtitle = "Trusted by global enterprises, we solve business challenges and boost productivity through intelligent systems.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Learn more",
  secondaryButtonHref = "/services",
  videoUrl,
  backgroundImageUrl = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&q=80",
  stats = [
    { value: "40+", label: "Industries innovated" },
    { value: "3M+", label: "Professionals available" }
  ],
  className
}: HeroLandingPageProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden relative ${className || ''}`}>
      {/* Subtle blue background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-transparent to-transparent opacity-50" />
      </div>

      {/* Main Content */}
      <main className="min-h-screen pt-[300px] pb-20 relative">
        {/* Hero Video/Image Background */}
        {videoUrl ? (
          <video
            className="absolute -top-[20%] left-0 w-full h-[120%] object-cover z-0 bg-background"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute -top-[20%] left-0 w-full h-[120%] object-cover z-0 bg-background"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <div className="content-wrapper max-w-[1400px] mx-auto px-4 md:px-[60px] flex flex-col md:flex-row justify-between items-end relative z-[2] gap-12 md:gap-0">
          {/* Left Content */}
          <div className="max-w-[800px]">
            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] mb-8 tracking-tight text-white">
              {title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                {titleLine2}
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-12 font-normal max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-base font-medium text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
                style={{
                  background: "hsl(var(--primary))",
                }}
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center rounded-full px-8 h-12 text-base font-medium hover:bg-white/10 transition-all hover:scale-105"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                }}
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          {stats.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 items-start sm:items-end">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-none mb-3 text-white">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/70 font-normal">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
