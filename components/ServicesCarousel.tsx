"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const padding = 160; // pl-20 + pr-20 = 80px each side = 160px total
        const gap = 24; // 1.5rem = 24px per gap, 2 gaps = 48px total
        const availableWidth = containerWidth - padding; // Subtract padding for buttons
        const width = (availableWidth - (2 * gap)) / 3; // 3 cards with 2 gaps
        setCardWidth(width);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      // Continuous scroll - wrap around when reaching the end
      if (prev >= services.length - 3) {
        return 0;
      }
      return prev + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      // Continuous scroll - wrap around when reaching the beginning
      if (prev <= 0) {
        return services.length - 3;
      }
      return prev - 1;
    });
  };

  // Determine if a card should be visible (only show 3 complete cards)
  const isCardVisible = (index: number) => {
    return index >= currentIndex && index < currentIndex + 3;
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative">
        {/* Previous Button - Left Side, Centered - Away from cards */}
        <motion.button
          onClick={goToPrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20"
          style={{ marginLeft: '-2rem' }}
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2} />
        </motion.button>

        {/* Next Button - Right Side, Centered - Away from cards */}
        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-900/20"
          style={{ marginRight: '-2rem' }}
        >
          <ChevronRight className="w-6 h-6" strokeWidth={2} />
        </motion.button>

        {/* Sliding Cards Container - Ensure 3 complete cards are visible */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden pl-20 pr-20"
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: cardWidth > 0 ? `-${currentIndex * (cardWidth + 24)}px` : `-${currentIndex * (100 / 3)}%`,
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
                    width: cardWidth > 0 ? `${cardWidth}px` : 'calc((100% - 3rem) / 3)',
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
                  <div className={`h-full bg-white/10 backdrop-blur-sm rounded-3xl p-10 transition-all duration-500 border border-white/10 ${visible ? 'hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-900/20' : ''}`}>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 border border-white/20">
                    <service.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold text-white tracking-tight leading-tight mb-4">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 leading-relaxed text-[15px] mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm text-blue-100">{feature}</span>
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

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
        {services.map((_, index) => {
          const isVisible = index >= currentIndex && index < currentIndex + 3;
          return (
            <button
              key={index}
              onClick={() => {
                // Calculate the starting index to show this service
                const newIndex = Math.min(index, Math.max(0, services.length - 3));
                setCurrentIndex(newIndex);
              }}
              className={`transition-all duration-300 rounded-full ${
                isVisible
                  ? "w-3 h-3 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Service Counter */}
      <div className="text-center mt-6">
        <span className="text-sm text-white/70">
          {currentIndex + 1}-{Math.min(currentIndex + 3, services.length)} of {services.length}
        </span>
      </div>
    </div>
  );
}
