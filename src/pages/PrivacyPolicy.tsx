import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-secondary mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Information We Collect</h2>
          <p className="text-gray-700">
            INFIN8 Automation collects information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Business contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
            <li>Service usage data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide and maintain our automation services</li>
            <li>Process payments and send invoices</li>
            <li>Communicate about service updates</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Data Security</h2>
          <p className="text-gray-700">
            INFIN8 Automation implements appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We strive to protect your personal information but cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Third-Party Services</h2>
          <p className="text-gray-700">
            Our services integrate with WhatsApp, social media platforms, and other third-party services. These services have their own privacy policies, and we encourage you to read them.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 