"use client";

import React, { useState, useRef, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SplineScene } from "@/components/SplineScene";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import AuroraBackground from "@/components/ui/aurora-background-1";
import { motion, PanInfo } from "framer-motion";
import Link from "next/link";
import { 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Users,
  BarChart3,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Business Consulting Services
const consultingServices = [
  {
    name: "Strategy Consulting",
    icon: Lightbulb,
    description: "Develop comprehensive business strategies aligned with your goals and market opportunities to drive sustainable growth.",
    features: ["Strategic Planning", "Market Analysis", "Competitive Intelligence", "Business Model Design"]
  },
  {
    name: "Growth Consulting",
    icon: TrendingUp,
    description: "Identify growth opportunities and create actionable plans to scale your business efficiently and effectively.",
    features: ["Growth Strategy", "Market Expansion", "Revenue Optimization", "Scaling Plans"]
  },
  {
    name: "Digital Transformation",
    icon: Target,
    description: "Navigate digital transformation with expert guidance on technology adoption and process optimization.",
    features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"]
  },
  {
    name: "Operations Consulting",
    icon: Users,
    description: "Optimize your operations, improve efficiency, and reduce costs through strategic improvements and best practices.",
    features: ["Process Improvement", "Efficiency Analysis", "Cost Optimization", "Workflow Design"]
  },
  {
    name: "Performance Analysis",
    icon: BarChart3,
    description: "Analyze your business performance and identify areas for improvement with data-driven insights and recommendations.",
    features: ["Performance Metrics", "Data Analysis", "KPI Development", "Reporting Systems"]
  },
  {
    name: "Innovation Consulting",
    icon: Rocket,
    description: "Foster innovation and stay ahead of the competition with cutting-edge strategies and practices.",
    features: ["Innovation Strategy", "Product Development", "R&D Planning", "Future Trends"]
  },
  {
    name: "Organizational Development",
    icon: Briefcase,
    description: "Build high-performing teams and organizational structures that drive business success and employee engagement.",
    features: ["Team Building", "Organizational Design", "Culture Development", "Leadership Training"]
  },
  {
    name: "Business Process Automation",
    icon: Zap,
    description: "Streamline and automate business processes to increase productivity and reduce manual work.",
    features: ["Process Automation", "Workflow Design", "System Integration", "Efficiency Gains"]
  },
];

// Business Consulting Services Carousel Component
function ConsultingServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size and update cards per view
  useEffect(() => {
    const updateResponsive = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      if (mobile) {
        setCardsPerView(1);
      } else if (tablet) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateResponsive();
    window.addEventListener("resize", updateResponsive);
    return () => window.removeEventListener("resize", updateResponsive);
  }, []);

  // Calculate card width
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateCardWidth = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      
      if (isMobile) {
        setCardWidth(containerWidth - 32); // Account for padding
      } else if (isTablet) {
        setCardWidth((containerWidth - 64 - 24) / 2); // Account for padding and gap
      } else {
        setCardWidth((containerWidth - 160 - 48) / 3); // Account for padding and gaps
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [isMobile, isTablet]);

  const goToNext = () => {
    setCurrentIndex((prev) => 
      Math.min(prev + cardsPerView, consultingServices.length - cardsPerView)
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(Math.min(index, consultingServices.length - cardsPerView));
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentIndex > 0) {
      goToPrevious();
    } else if (info.offset.x < -threshold && currentIndex < consultingServices.length - cardsPerView) {
      goToNext();
    }
  };

  const isCardVisible = (index: number) => {
    return index >= currentIndex && index < currentIndex + cardsPerView;
  };

  return (
    <div className="relative">
      {!isMobile && (
        <motion.button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed
            ${isTablet 
              ? 'left-2 w-12 h-12' 
              : 'left-4 w-14 h-14'
            }`}
          style={!isTablet ? { marginLeft: '-2rem' } : {}}
          aria-label="Previous service"
        >
          <ChevronLeft className={`${isTablet ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={2} />
        </motion.button>
      )}

      {!isMobile && (
        <motion.button
          onClick={goToNext}
          disabled={currentIndex >= consultingServices.length - cardsPerView}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed
            ${isTablet 
              ? 'right-2 w-12 h-12' 
              : 'right-4 w-14 h-14'
            }`}
          style={!isTablet ? { marginRight: '-2rem' } : {}}
          aria-label="Next service"
        >
          <ChevronRight className={`${isTablet ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={2} />
        </motion.button>
      )}

      <div 
        ref={containerRef}
        className={`relative overflow-hidden ${
          isMobile 
            ? 'px-4' 
            : isTablet 
              ? 'pl-16 pr-16' 
              : 'pl-20 pr-20'
        }`}
      >
        <motion.div
          className="flex gap-6"
          drag={isMobile ? "x" : false}
          dragConstraints={isMobile ? { left: 0, right: 0 } : undefined}
          dragElastic={isMobile ? 0.2 : undefined}
          onDragEnd={isMobile ? handleDragEnd : undefined}
          animate={{
            x: cardWidth > 0 
              ? `-${currentIndex * (cardWidth + 24)}px` 
              : `-${currentIndex * (100 / cardsPerView)}%`,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {consultingServices.map((service, index) => {
            const visible = isCardVisible(index);
            return (
              <motion.div
                key={`${service.name}-${index}`}
                className="flex-shrink-0"
                style={{ 
                  width: cardWidth > 0 
                    ? `${cardWidth}px` 
                    : isMobile 
                      ? '100%' 
                      : isTablet 
                        ? 'calc((100% - 1.5rem) / 2)' 
                        : 'calc((100% - 3rem) / 3)',
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: visible ? 1 : 0,
                  pointerEvents: visible ? 'auto' : 'none',
                  visibility: visible ? 'visible' : 'hidden'
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }
                }}
              >
                <div className={`h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 transition-all duration-500 flex flex-col ${
                  visible ? 'hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-900/20' : ''
                } ${
                  isMobile ? 'p-6' : 'p-10'
                }`}>
                  <div className={`rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 border border-white/20 ${
                    isMobile ? 'w-10 h-10 mb-6' : 'w-12 h-12 mb-8'
                  }`}>
                    <service.icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={1.5} />
                  </div>

                  <h3 className={`font-semibold text-white tracking-tight leading-tight mb-4 ${
                    isMobile ? 'text-2xl' : 'text-3xl'
                  }`}>
                    {service.name}
                  </h3>

                  <p className={`text-blue-100 leading-relaxed mb-6 ${
                    isMobile ? 'text-sm' : 'text-[15px]'
                  }`}>
                    {service.description}
                  </p>

                  <ul className={`space-y-3 mb-6 ${isMobile ? 'space-y-2' : ''}`}>
                    {service.features.map((feature, i) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 ${
                          isMobile ? 'w-4 h-4' : 'w-5 h-5'
                        }`}>
                          <CheckCircle2 className={`text-white ${isMobile ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
                        </div>
                        <span className={`text-blue-100 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button className="w-full rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {isMobile && (
        <div className="flex items-center justify-between px-4 mt-6">
          <motion.button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </motion.button>

          <motion.button
            onClick={goToNext}
            disabled={currentIndex >= consultingServices.length - 1}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </motion.button>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
        {consultingServices.map((_, index) => {
          const isVisible = index >= currentIndex && index < currentIndex + cardsPerView;
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? isMobile 
                    ? "w-2.5 h-2.5 bg-white" 
                    : "w-3 h-3 bg-white"
                  : isVisible
                    ? isMobile
                      ? "w-2 h-2 bg-white/60"
                      : "w-2.5 h-2.5 bg-white/60"
                    : isMobile
                      ? "w-1.5 h-1.5 bg-white/30"
                      : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          );
        })}
      </div>

      <div className="text-center mt-6">
        <span className={`text-white/70 ${isMobile ? 'text-xs' : 'text-sm'}`}>
          {isMobile 
            ? `${currentIndex + 1} of ${consultingServices.length}`
            : `${currentIndex + 1}-${Math.min(currentIndex + cardsPerView, consultingServices.length)} of ${consultingServices.length}`
          }
        </span>
        {isMobile && (
          <p className="text-xs text-white/50 mt-2">Swipe to navigate</p>
        )}
      </div>
    </div>
  );
}

export default function ConsultingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Aurora Background */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        <AuroraBackground className="min-h-screen">
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center max-w-4xl space-y-8"
            >
              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Transform Your Business with Expert Consulting
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                We deliver strategic consulting services that drive growth, optimize operations, and help you achieve sustainable business success. Partner with us to unlock your potential.
              </p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-base font-medium text-white shadow-lg shadow-blue-900/20 transition-all hover:scale-105 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full px-8 h-12 text-base font-medium text-white hover:bg-white/10 transition-all hover:scale-105 border border-white/20 backdrop-blur-sm"
                >
                  Our Services
                </Link>
              </motion.div>

              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm font-normal italic text-white/70"
              >
                *Free consultation available
              </motion.p>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center gap-3"
              >
                <div className="flex flex-row -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
                  ].map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`User ${index + 1}`}
                      className="rounded-full border-2 border-white/30"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/80">
                  Join over 500+ satisfied clients
                </span>
              </motion.div>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>
      
      {/* Services Section */}
      <section className="relative w-full bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16 flex flex-col gap-6 border-b border-white/20 pb-6 md:pb-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Business Consulting Services<br className="hidden md:block" />for Your Success
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Comprehensive consulting solutions to help your business thrive and achieve sustainable growth.
              </p>
            </div>
          </motion.div>

          {/* Consulting Services Carousel */}
          <ConsultingServicesCarousel />
        </div>
      </section>

      {/* 3D Scene Section */}
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
                Why Choose Our Consulting Services
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
            <p className="text-base text-white/80 leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional consulting results.
            </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Lightbulb,
                title: "STRATEGIC PLANNING",
                description: "Develop comprehensive business strategies aligned with your goals and market opportunities to drive sustainable growth.",
                tag: "STRATEGY"
              },
              {
                icon: TrendingUp,
                title: "GROWTH CONSULTING",
                description: "Identify growth opportunities and create actionable plans to scale your business efficiently and effectively.",
                tag: "GROWTH"
              },
              {
                icon: Target,
                title: "DIGITAL TRANSFORMATION",
                description: "Navigate digital transformation with expert guidance on technology adoption and process optimization.",
                tag: "DIGITAL"
              },
              {
                icon: Users,
                title: "OPERATIONS OPTIMIZATION",
                description: "Optimize your operations, improve efficiency, and reduce costs through strategic improvements and best practices.",
                tag: "EFFICIENCY"
              },
              {
                icon: BarChart3,
                title: "PERFORMANCE ANALYSIS",
                description: "Analyze your business performance and identify areas for improvement with data-driven insights and recommendations.",
                tag: "ANALYTICS"
              },
              {
                icon: Rocket,
                title: "INNOVATION CONSULTING",
                description: "Foster innovation and stay ahead of the competition with cutting-edge strategies and practices.",
                tag: "INNOVATION"
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
              src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Business strategy meeting',
            },
            {
              src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Team collaboration',
            },
            {
              src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Business growth',
            },
            {
              src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Consulting services',
            },
            {
              src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Digital transformation',
            },
            {
              src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Business consulting',
            },
            {
              src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Strategic planning',
            },
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}
