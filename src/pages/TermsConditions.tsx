import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-secondary mb-8">Terms and Conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            These Terms and Conditions govern your use of INFIN8 Automation's services and website. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">2. Services</h2>
          <p className="text-gray-700">
            INFIN8 Automation provides business automation services including WhatsApp automation, social media management, and QR code campaigns. Our services are available to businesses in Florida through various subscription plans.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">3. Pricing and Payment</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Setup fees and monthly subscriptions are required for our services</li>
            <li>Payments are processed securely and are non-refundable</li>
            <li>Prices are subject to change with notice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">4. Service Usage</h2>
          <p className="text-gray-700">
            Users agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide accurate business information</li>
            <li>Maintain security of account credentials</li>
            <li>Use services in compliance with applicable laws</li>
            <li>Not engage in unauthorized automation or spamming</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">5. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, features, and functionality of INFIN8 Automation services are owned by INFIN8 Automation and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions; 