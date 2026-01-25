"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

interface ScrollMorphHeroProps {
    images?: string[];
    title?: string;
    subtitle?: string;
    className?: string;
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-primary flex flex-col items-center justify-center p-4 border border-primary/20"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-primary-foreground uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-primary-foreground">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

// Default Unsplash Images (AI/Technology themed)
const DEFAULT_IMAGES = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero({
    images = DEFAULT_IMAGES,
    title = "The future is built on AI.",
    subtitle = "SCROLL TO EXPLORE",
    className
}: ScrollMorphHeroProps) {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !isMounted) return;

        const handleWheel = (e: WheelEvent) => {
            // Only capture scroll if mouse is actively over the container
            if (!isHovering) {
                return; // Allow normal page scroll
            }
            
            // Check if we're at boundaries
            const isAtTop = scrollRef.current <= 0 && e.deltaY < 0;
            const isAtBottom = scrollRef.current >= MAX_SCROLL && e.deltaY > 0;
            
            // If at boundaries, allow normal page scroll
            if (isAtTop || isAtBottom) {
                return; // Allow default scroll behavior
            }
            
            // Only prevent default if we're actively controlling the animation
            e.preventDefault();
            e.stopPropagation();
            
            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        let touchStartY = 0;
        let touchStarted = false;
        
        const handleTouchStart = (e: TouchEvent) => {
            touchStarted = true;
            touchStartY = e.touches[0].clientY;
        };
        
        const handleTouchMove = (e: TouchEvent) => {
            if (!touchStarted) return;
            
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const isAtTop = scrollRef.current <= 0 && deltaY < 0;
            const isAtBottom = scrollRef.current >= MAX_SCROLL && deltaY > 0;
            
            if (isAtTop || isAtBottom) {
                return;
            }
            
            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };
        
        const handleTouchEnd = () => {
            touchStarted = false;
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });
        container.addEventListener("touchend", handleTouchEnd, { passive: true });
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [virtualScroll, isMounted, isHovering]);

    // Morph Progress: 0 (Circle) -> 1 (Bottom Arc)
    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    // Scroll Rotation (Shuffling)
    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !isMounted) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, isMounted]);

    // --- Intro Sequence ---
    useEffect(() => {
        if (!isMounted) return;
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, [isMounted]);

    // --- Random Scatter Positions ---
    // Only calculate on client to avoid hydration mismatch
    const scatterPositions = useMemo(() => {
        if (!isMounted) {
            // Return placeholder positions for SSR
            return images.slice(0, TOTAL_IMAGES).map(() => ({
                x: 0,
                y: 0,
                rotation: 0,
                scale: 0.6,
                opacity: 0,
            }));
        }
        return images.slice(0, TOTAL_IMAGES).map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, [images, isMounted]);

    // --- Render Loop ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        if (!isMounted) return;
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX, isMounted]);

    // --- Content Opacity ---
    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    if (!isMounted) {
        return (
            <div ref={containerRef} className={cn("relative w-full h-full bg-background overflow-visible", className)}>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className={cn("relative w-full h-full bg-background overflow-visible", className)}>
            {/* Container */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-2xl md:text-4xl font-medium tracking-tight text-foreground"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-muted-foreground"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
                        Explore Our Vision
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                        Discover a world where technology meets creativity. <br className="hidden md:block" />
                        Scroll through our curated collection of innovations designed to shape the future.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {images.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;
                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
