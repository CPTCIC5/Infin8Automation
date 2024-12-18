import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Instagram, QrCode, Search, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "whatsapp",
    icon: <MessageSquare className="h-8 w-8" />,
    title: "WhatsApp Automation",
    description: "Automate customer communications and appointment scheduling",
    features: [
      "24/7 automated responses",
      "Appointment scheduling & reminders",
      "Custom workflow automation",
      "Message templates & quick replies"
    ],
    price: "$399 setup + $199/month"
  },
  {
    id: "social",
    icon: <Instagram className="h-8 w-8" />,
    title: "Social Media Automation",
    description: "Streamline your social media management",
    features: [
      "Automated post scheduling",
      "Content calendar management",
      "Cross-platform posting",
      "Analytics & reporting"
    ],
    price: "$499 setup + $199/month"
  }
];

const ServiceShowcase = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-3">Our Services</h2>
          <p className="text-gray-600">Simple pricing, powerful features</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-primary font-semibold mb-4">{service.price}</p>
                  <Button 
                    className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase; 