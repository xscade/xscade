"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SplineScene } from "@/components/SplineScene";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { motion, PanInfo } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Brain,
  Sparkles,
  Bot,
  Cpu,
  Network,
  Code,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

// AI Development Services
const aiServices = [
  {
    name: "Machine Learning",
    icon: Brain,
    description: "Build intelligent systems with advanced machine learning models that learn from data and improve over time.",
    features: ["Custom ML Models", "Model Training", "Data Preprocessing", "Model Deployment"]
  },
  {
    name: "AI Strategy",
    icon: Sparkles,
    description: "Develop comprehensive AI strategies that align with your business goals and drive innovation.",
    features: ["AI Roadmap", "Use Case Analysis", "ROI Assessment", "Implementation Planning"]
  },
  {
    name: "Chatbots & NLP",
    icon: Bot,
    description: "Create intelligent conversational AI solutions with natural language processing capabilities.",
    features: ["Chatbot Development", "NLP Integration", "Voice Assistants", "Sentiment Analysis"]
  },
  {
    name: "Computer Vision",
    icon: Cpu,
    description: "Implement computer vision solutions for image recognition, object detection, and visual analytics.",
    features: ["Image Recognition", "Object Detection", "Video Analysis", "Visual Search"]
  },
  {
    name: "AI Integration",
    icon: Network,
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    features: ["API Integration", "System Integration", "Workflow Automation", "Legacy Modernization"]
  },
  {
    name: "LLM Development",
    icon: Code,
    description: "Develop and deploy large language models for content generation, analysis, and automation.",
    features: ["Custom LLMs", "Fine-tuning", "Prompt Engineering", "RAG Systems"]
  },
  {
    name: "AI Analytics",
    icon: Database,
    description: "Leverage AI-powered analytics to extract insights and make data-driven decisions.",
    features: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Business Intelligence"]
  },
  {
    name: "AI Automation",
    icon: Zap,
    description: "Automate business processes with intelligent AI systems that reduce manual work.",
    features: ["Process Automation", "Intelligent Workflows", "Decision Automation", "Task Optimization"]
  },
];

// AI Development Services Carousel Component
function AIServicesCarousel() {
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
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 24;
        
        if (isMobile) {
          const padding = 32;
          const width = containerWidth - padding;
          setCardWidth(width);
        } else if (isTablet) {
          const padding = 120;
          const availableWidth = containerWidth - padding;
          const width = (availableWidth - gap) / 2;
          setCardWidth(width);
        } else {
          const padding = 160;
          const availableWidth = containerWidth - padding;
          const width = (availableWidth - (2 * gap)) / 3;
          setCardWidth(width);
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, [isMobile, isTablet]);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= aiServices.length - cardsPerView) {
        return 0;
      }
      return prev + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return aiServices.length - cardsPerView;
      }
      return prev - 1;
    });
  };

  const goToIndex = (index: number) => {
    const maxIndex = Math.max(0, aiServices.length - cardsPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;

    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 || velocity > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  const isCardVisible = (index: number) => {
    return index >= currentIndex && index < currentIndex + cardsPerView;
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        {!isMobile && (
          <motion.button
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20
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
            {aiServices.map((service, index) => {
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
                  <div className={`h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 transition-all duration-500 ${
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

                    <ul className={`space-y-3 ${isMobile ? 'space-y-2' : ''}`}>
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
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {isMobile && (
        <div className="flex items-center justify-between px-4 mt-6">
          <motion.button
            onClick={goToPrevious}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </motion.button>

          <motion.button
            onClick={goToNext}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </motion.button>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
        {aiServices.map((_, index) => {
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
            ? `${currentIndex + 1} of ${aiServices.length}`
            : `${currentIndex + 1}-${Math.min(currentIndex + cardsPerView, aiServices.length)} of ${aiServices.length}`
          }
        </span>
        {isMobile && (
          <p className="text-xs text-white/50 mt-2">Swipe to navigate</p>
        )}
      </div>
    </div>
  );
}

export default function AIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-visible">
        <ScrollMorphHero
          title="The future is built on AI."
          subtitle="SCROLL TO EXPLORE"
          className="h-screen"
          images={[
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
          ]}
        />
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
                AI Development Services<br className="hidden md:block" />for Your Business
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Comprehensive AI solutions to transform your business with intelligent automation and insights.
              </p>
            </div>
          </motion.div>

          {/* AI Services Carousel */}
          <AIServicesCarousel />
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
                Why Choose Our AI Solutions
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end md:max-w-sm">
            <p className="text-base text-white/80 leading-relaxed">
              We combine cutting-edge AI technology with business expertise to deliver intelligent solutions that drive results.
            </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Brain,
                title: "ADVANCED AI MODELS",
                description: "State-of-the-art machine learning and deep learning models tailored to your specific business needs and use cases.",
                tag: "INNOVATION"
              },
              {
                icon: Zap,
                title: "RAPID DEPLOYMENT",
                description: "Fast implementation and deployment of AI solutions with agile methodologies and proven frameworks.",
                tag: "SPEED"
              },
              {
                icon: Network,
                title: "SEAMLESS INTEGRATION",
                description: "Easy integration with your existing systems and workflows, ensuring minimal disruption to operations.",
                tag: "INTEGRATION"
              },
              {
                icon: Database,
                title: "DATA-DRIVEN INSIGHTS",
                description: "Transform your data into actionable insights with AI-powered analytics and predictive modeling.",
                tag: "ANALYTICS"
              },
              {
                icon: Code,
                title: "CUSTOM SOLUTIONS",
                description: "Bespoke AI development tailored to your unique requirements, from concept to production deployment.",
                tag: "CUSTOM"
              },
              {
                icon: Sparkles,
                title: "CONTINUOUS LEARNING",
                description: "AI systems that continuously learn and improve, adapting to new data and evolving business needs.",
                tag: "ADAPTIVE"
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
              src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'AI technology',
            },
            {
              src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Machine learning',
            },
            {
              src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'AI neural network',
            },
            {
              src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Data analytics',
            },
            {
              src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'AI automation',
            },
            {
              src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'Intelligent systems',
            },
            {
              src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
              alt: 'AI development',
            },
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}
