"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightning } from "@/components/ui/lightning-effect";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageSquare,
  Headphones,
  Zap,
  Globe,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    }, 3000);
  };

  const services = [
    "Digital Marketing",
    "Software Development",
    "AI Development",
    "Consulting",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Blue Gradient and Lightning Effect */}
      <section className="relative w-full bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden pt-16">
        {/* Lightning Effect Background */}
        <div className="absolute inset-0 z-0 mix-blend-screen opacity-70">
          <Lightning
            hue={220}
            xOffset={0}
            speed={1.6}
            intensity={0.6}
            size={2}
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-xs uppercase tracking-[0.35em] text-white/70 mb-6"
            >
              Get In Touch
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Let's Build Something<br className="hidden md:block" /> Amazing Together
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to transform your business? Our team of experts is here to help you achieve your goals.
            </motion.p>
          </motion.div>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: "info@xscade.com",
                href: "mailto:info@xscade.com"
              },
              {
                icon: Phone,
                title: "Call Us",
                value: "+1 (234) 567-890",
                href: "tel:+1234567890"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "123 Business Street",
                href: "#"
              }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">{item.title}</p>
                  <p className="text-base font-medium text-white">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side - Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-primary mb-4 block">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  We're Here to Help You Succeed
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From digital marketing to software development, we provide comprehensive solutions tailored to your unique needs.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Clock,
                    title: "24hr Response",
                    description: "Quick turnaround on all inquiries"
                  },
                  {
                    icon: Headphones,
                    title: "Expert Support",
                    description: "Dedicated team for your project"
                  },
                  {
                    icon: Zap,
                    title: "Fast Delivery",
                    description: "Agile approach to all projects"
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description: "Serving clients worldwide"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Schedule a Free Consultation</h3>
                    <p className="text-sm text-muted-foreground mb-4">Book a 30-minute call with our experts to discuss your project needs.</p>
                    <Link href="#">
                      <Button variant="outline" className="rounded-full">
                        Book a Call
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 text-base font-medium shadow-lg shadow-primary/20"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-white/70 mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "We typically begin projects within 1-2 weeks of initial consultation. For urgent requirements, we can often accommodate faster timelines."
              },
              {
                question: "What industries do you work with?",
                answer: "We work across all industries including healthcare, finance, e-commerce, education, technology, and more. Our solutions are tailored to each industry's unique needs."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, we provide comprehensive maintenance and support packages to ensure your solutions continue to perform optimally after launch."
              },
              {
                question: "What is your pricing model?",
                answer: "We offer flexible pricing including fixed-price projects, hourly rates, and retainer agreements. We'll recommend the best model based on your specific needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-white/80 mb-4">Still have questions?</p>
            <Link href="mailto:info@xscade.com">
              <Button
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="relative py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-primary mb-4 block">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Come visit us at our office or reach out through any of our contact methods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Google Map Embed */}
            <div className="relative w-full h-[500px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133389882!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              
              {/* Overlay Info Card */}
              <div className="absolute top-6 left-6 right-6 md:left-auto md:right-6 md:w-80">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-border shadow-xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Xscade Office</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business Street<br />
                        City, State 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a href="tel:+1234567890" className="text-sm text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <a href="mailto:info@xscade.com" className="text-sm text-primary hover:underline">
                        info@xscade.com
                      </a>
                    </div>
                  </div>

                  <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mt-4 rounded-full" size="sm">
                      Get Directions
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
