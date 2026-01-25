"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Service interface with href
interface Service {
  name: string;
  href: string;
}

// All Xscade services - reordered with Digital Marketing, Software Engineering, and AI Development first
const allServices: Service[] = [
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Software Engineering", href: "/services/software-development" },
  { name: "AI Development", href: "/services/ai-development" },
  { name: "Consulting", href: "/services/consulting" },
  { name: "Blockchain", href: "/services" },
  { name: "Cloud", href: "/services" },
  { name: "Data Services", href: "/services" },
  { name: "DevOps", href: "/services" },
  { name: "Enterprise Application", href: "/services" },
  { name: "Enterprise Data", href: "/services" },
  { name: "Generative AI", href: "/services" },
  { name: "Insurance Tech", href: "/services" },
  { name: "Intelligent Automation", href: "/services" },
  { name: "IT Staffing", href: "/services" },
  { name: "Low Code Development", href: "/services" },
  { name: "Mobile App Development", href: "/services" },
  { name: "Monday Consulting", href: "/services" },
  { name: "QA & Testing", href: "/services" },
  { name: "Salesforce", href: "/services" },
  { name: "Virtual CTO", href: "/services" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive solutions to elevate your digital presence and drive business success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology and consulting services to meet all your business needs
            </p>
          </motion.div>

          {/* Services Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {allServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <div className="bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:bg-primary/5 cursor-pointer h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors mb-4">
                      {service.name}
                    </h3>
                    <div className="mt-auto">
                      <div 
                        className="w-full rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-foreground group-hover:text-primary transition-all px-4 py-2 text-sm font-medium flex items-center justify-center gap-2"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
