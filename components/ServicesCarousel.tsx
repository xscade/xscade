"use client";

import { useState, useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Blocks,
  Cloud,
  Database,
  Settings,
  Building2,
  FileStack,
  Brain,
  Shield,
  Zap,
  Users,
  Code,
  Smartphone,
  Calendar,
  Wrench,
  TestTube,
  Briefcase,
  UserCog,
  Megaphone,
} from "lucide-react";

const services = [
  {
    name: "Digital Marketing",
    icon: Megaphone,
    description: "Comprehensive digital marketing services including SEO, PPC, social media marketing, content strategy, and brand development to grow your online presence.",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media Management", "Content Marketing"]
  },
  {
    name: "AI Services",
    icon: Sparkles,
    description: "Comprehensive AI solutions including machine learning, natural language processing, and computer vision to transform your business operations.",
    features: ["Machine Learning Models", "NLP Solutions", "Computer Vision", "AI Strategy Consulting"]
  },
  {
    name: "Blockchain",
    icon: Blocks,
    description: "Blockchain development and consulting services for decentralized applications, smart contracts, and cryptocurrency solutions.",
    features: ["Smart Contracts", "DApp Development", "Blockchain Consulting", "Cryptocurrency Solutions"]
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "Cloud infrastructure, migration, and management services across AWS, Azure, and GCP to scale your business.",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps on Cloud", "Cost Optimization"]
  },
  {
    name: "Data Services",
    icon: Database,
    description: "Data engineering, analytics, and management services to unlock insights from your data and drive decision-making.",
    features: ["Data Engineering", "Analytics & BI", "Data Warehousing", "ETL Pipelines"]
  },
  {
    name: "DevOps",
    icon: Settings,
    description: "DevOps practices, CI/CD pipelines, and infrastructure automation to accelerate development and deployment cycles.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"]
  },
  {
    name: "Enterprise Application",
    icon: Building2,
    description: "Custom enterprise applications tailored to your business needs, from ERP systems to workflow automation.",
    features: ["Custom ERP Systems", "Workflow Automation", "Integration Services", "Legacy Modernization"]
  },
  {
    name: "Enterprise Data",
    icon: FileStack,
    description: "Enterprise data management, governance, and analytics solutions for large-scale organizations.",
    features: ["Data Governance", "Master Data Management", "Data Quality", "Compliance & Security"]
  },
  {
    name: "Generative AI",
    icon: Brain,
    description: "Cutting-edge generative AI solutions including LLM integration, content generation, and AI-powered applications.",
    features: ["LLM Integration", "Content Generation", "AI Chatbots", "Custom AI Models"]
  },
  {
    name: "Insurance Tech",
    icon: Shield,
    description: "Technology solutions specifically designed for the insurance industry, from claims processing to risk assessment.",
    features: ["Claims Processing", "Risk Assessment", "Policy Management", "Digital Transformation"]
  },
  {
    name: "Intelligent Automation",
    icon: Zap,
    description: "RPA and intelligent automation solutions to streamline business processes and reduce manual work.",
    features: ["RPA Implementation", "Process Automation", "Workflow Optimization", "AI-Powered Automation"]
  },
  {
    name: "IT Staffing",
    icon: Users,
    description: "Access to top-tier IT talent for your projects, from developers to architects and technical leads.",
    features: ["Technical Recruiting", "Contract Staffing", "Permanent Placement", "Talent Assessment"]
  },
  {
    name: "Low Code Development",
    icon: Code,
    description: "Rapid application development using low-code and no-code platforms to accelerate time-to-market.",
    features: ["Platform Selection", "Custom Development", "Integration Services", "Training & Support"]
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"]
  },
  {
    name: "Monday Consulting",
    icon: Calendar,
    description: "Expert consulting services for Monday.com implementation, customization, and workflow optimization.",
    features: ["Platform Setup", "Workflow Design", "Integration Services", "Training & Support"]
  },
  {
    name: "Software Engineering",
    icon: Wrench,
    description: "Full-stack software engineering services from architecture design to implementation and maintenance.",
    features: ["System Architecture", "Full-Stack Development", "Code Review", "Technical Consulting"]
  },
  {
    name: "QA & Testing",
    icon: TestTube,
    description: "Comprehensive quality assurance and testing services to ensure your software meets the highest standards.",
    features: ["Test Automation", "Manual Testing", "Performance Testing", "Security Testing"]
  },
  {
    name: "Salesforce",
    icon: Briefcase,
    description: "Salesforce implementation, customization, and consulting services to maximize your CRM investment.",
    features: ["Salesforce Setup", "Custom Development", "Integration Services", "Admin Training"]
  },
  {
    name: "Virtual CTO",
    icon: UserCog,
    description: "Strategic technology leadership on-demand to guide your technical decisions and architecture.",
    features: ["Technology Strategy", "Architecture Review", "Team Leadership", "Technical Advisory"]
  },
];

export function ServicesCarousel() {
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
      const desktop = width >= 1024;
      
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
        const gap = 24; // 1.5rem = 24px
        
        if (isMobile) {
          // Mobile: Full width minus padding
          const padding = 32; // px-4 = 16px each side
          const width = containerWidth - padding;
          setCardWidth(width);
        } else if (isTablet) {
          // Tablet: 2 cards with padding for buttons
          const padding = 120; // Space for buttons
          const availableWidth = containerWidth - padding;
          const width = (availableWidth - gap) / 2; // 2 cards with 1 gap
          setCardWidth(width);
        } else {
          // Desktop: 3 cards with padding for buttons
          const padding = 160; // pl-20 + pr-20 = 80px each side
          const availableWidth = containerWidth - padding;
          const width = (availableWidth - (2 * gap)) / 3; // 3 cards with 2 gaps
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
      // Continuous scroll - wrap around when reaching the end
      if (prev >= services.length - cardsPerView) {
        return 0;
      }
      return prev + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      // Continuous scroll - wrap around when reaching the beginning
      if (prev <= 0) {
        return services.length - cardsPerView;
      }
      return prev - 1;
    });
  };

  const goToIndex = (index: number) => {
    const maxIndex = Math.max(0, services.length - cardsPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Handle swipe gesture end
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50; // Minimum drag distance to trigger navigation
    const velocity = info.velocity.x;

    // Only trigger navigation if drag is significant or has enough velocity
    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 || velocity > 0) {
        // Swiped right - go to previous
        goToPrevious();
      } else {
        // Swiped left - go to next
        goToNext();
      }
    }
    // The animate prop will handle the reset automatically
  };

  // Determine if a card should be visible
  const isCardVisible = (index: number) => {
    return index >= currentIndex && index < currentIndex + cardsPerView;
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative">
        {/* Previous Button - Responsive positioning */}
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

        {/* Next Button - Responsive positioning */}
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

        {/* Sliding Cards Container - Responsive padding */}
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
            {services.map((service, index) => {
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
                    {/* Icon */}
                    <div className={`rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 border border-white/20 ${
                      isMobile ? 'w-10 h-10 mb-6' : 'w-12 h-12 mb-8'
                    }`}>
                      <service.icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className={`font-semibold text-white tracking-tight leading-tight mb-4 ${
                      isMobile ? 'text-2xl' : 'text-3xl'
                    }`}>
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className={`text-blue-100 leading-relaxed mb-6 ${
                      isMobile ? 'text-sm' : 'text-[15px]'
                    }`}>
                      {service.description}
                    </p>

                    {/* Features List */}
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

      {/* Mobile Navigation Buttons - Inside card area */}
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

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
        {services.map((_, index) => {
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

      {/* Service Counter */}
      <div className="text-center mt-6">
        <span className={`text-white/70 ${isMobile ? 'text-xs' : 'text-sm'}`}>
          {isMobile 
            ? `${currentIndex + 1} of ${services.length}`
            : `${currentIndex + 1}-${Math.min(currentIndex + cardsPerView, services.length)} of ${services.length}`
          }
        </span>
        {isMobile && (
          <p className="text-xs text-white/50 mt-2">Swipe to navigate</p>
        )}
      </div>
    </div>
  );
}
