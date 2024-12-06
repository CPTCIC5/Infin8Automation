import React from 'react';
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceShowcase from "@/components/ServiceShowcase";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import SocialProofBanner from "@/components/SocialProofBanner";
import Pricing from "@/components/Pricing";
import LiveNotifications from "@/components/LiveNotifications";
import PillSections from "@/components/PillSections";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Nav />
      <Hero />
      <SocialProofBanner />
      <Features />
      <ServiceShowcase />
      <HowItWorks />
      <PillSections />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <BlogPreview />
      <FAQ />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      <LiveNotifications />
    </div>
  );
};

export default Index;