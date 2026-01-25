"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

interface NavigationItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

interface ProgramCard {
  image: string;
  category: string;
  title: string;
  href?: string;
  onClick?: () => void;
}

interface PulseFitHeroProps {
  logo?: string;
  logoHref?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  title: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
}

export function PulseFitHero({
  logo = "Xscade",
  logoHref = "/",
  navigation = [],
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
}: PulseFitHeroProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(180deg, hsl(var(--primary)/0.1) 0%, hsl(var(--primary)/0.05) 50%, hsl(var(--background)) 100%)",
      }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 pt-20"
        style={{
          paddingBottom: "32px",
        }}
      >
        {/* Logo */}
        <Link
          href={logoHref}
          className="text-xl font-semibold tracking-tight text-foreground flex-shrink-0"
        >
          {logo}
        </Link>

        {/* Navigation and CTA Container */}
        <div className="flex items-center gap-4 lg:gap-8 flex-shrink-0">
          {/* Navigation */}
          {navigation.length > 0 && (
            <nav className="hidden lg:flex flex-row items-center gap-6 xl:gap-8" aria-label="Main navigation">
              {navigation.map((item, index) => {
                const content = (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="flex flex-row items-center gap-1 hover:opacity-70 transition-opacity text-sm font-medium text-muted-foreground whitespace-nowrap"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                );

                return item.href ? (
                  <Link key={index} href={item.href}>
                    {content}
                  </Link>
                ) : (
                  content
                );
              })}
            </nav>
          )}

          {/* CTA Button */}
          {ctaButton && (
            <Link
              href={ctaButton.href || "#"}
              onClick={ctaButton.onClick}
              className="px-4 sm:px-5 h-9 rounded-full transition-all hover:scale-105 text-sm font-medium whitespace-nowrap flex-shrink-0"
              style={{
                background: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--foreground))",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              {ctaButton.label}
            </Link>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl space-y-8"
          >
            {/* Title */}
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {subtitle}
            </p>

            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                {primaryAction && (
                  <Link
                    href={primaryAction.href || "#"}
                    onClick={primaryAction.onClick}
                    className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-base font-medium text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    style={{
                      background: "hsl(var(--primary))",
                    }}
                  >
                    {primaryAction.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href || "#"}
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center rounded-full px-8 h-12 text-base font-medium hover:bg-muted transition-all hover:scale-105"
                    style={{
                      background: "transparent",
                      border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </motion.div>
            )}

            {/* Disclaimer */}
            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm font-normal italic"
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                {disclaimer}
              </motion.p>
            )}

            {/* Social Proof */}
            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center gap-3"
              >
                <div className="flex flex-row -space-x-2">
                  {socialProof.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`User ${index + 1}`}
                      className="rounded-full border-2 border-white"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 && isMounted && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden"
          style={{
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          {/* Gradient Overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "150px",
              background: "linear-gradient(90deg, hsl(var(--background)) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "150px",
              background: "linear-gradient(270deg, hsl(var(--background)) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center"
            animate={isMounted ? {
              x: [0, -((programs.length * 380) / 2)],
            } : {}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programs.length * 3,
                ease: "linear",
              },
            }}
            style={{
              gap: "24px",
              paddingLeft: "24px",
            }}
          >
            {/* Duplicate programs for seamless loop */}
            {[...programs, ...programs].map((program, index) => {
              const cardContent = (
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={program.onClick}
                  className="flex-shrink-0 cursor-pointer relative overflow-hidden"
                  style={{
                    width: "356px",
                    height: "480px",
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {/* Image */}
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  />

                  {/* Text Content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {program.category}
                    </span>
                    <h3
                      className="text-2xl font-semibold text-white leading-tight"
                    >
                      {program.title}
                    </h3>
                  </div>
                </motion.div>
              );

              return program.href ? (
                <Link key={index} href={program.href}>
                  {cardContent}
                </Link>
              ) : (
                <React.Fragment key={index}>{cardContent}</React.Fragment>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
