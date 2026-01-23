"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Users,
  BarChart3,
  Rocket,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy Consulting",
    description: "Develop comprehensive business strategies aligned with your goals and market opportunities."
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description: "Identify growth opportunities and create actionable plans to scale your business."
  },
  {
    icon: Target,
    title: "Digital Transformation",
    description: "Navigate digital transformation with expert guidance on technology adoption and process optimization."
  },
  {
    icon: Users,
    title: "Operations Consulting",
    description: "Optimize your operations, improve efficiency, and reduce costs through strategic improvements."
  },
  {
    icon: BarChart3,
    title: "Performance Analysis",
    description: "Analyze your business performance and identify areas for improvement with data-driven insights."
  },
  {
    icon: Rocket,
    title: "Innovation Consulting",
    description: "Foster innovation and stay ahead of the competition with cutting-edge strategies and practices."
  },
];

export default function ConsultingPage() {
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
              Business Consulting Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert guidance to help you make informed decisions, optimize operations, 
              and achieve sustainable business growth.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic consulting to help your business thrive in today's competitive landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our consulting services can help you achieve your business objectives.
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
