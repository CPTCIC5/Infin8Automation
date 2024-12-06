import React from 'react';
import { Check, X, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const features = [
  {
    category: "Communication",
    features: [
      {
        name: "WhatsApp Automation",
        description: "Automated responses and appointment scheduling",
        starter: true,
        growth: true,
        enterprise: true
      },
      {
        name: "Custom Message Templates",
        description: "Personalized response templates for different scenarios",
        starter: true,
        growth: true,
        enterprise: true
      },
      {
        name: "Multi-Language Support",
        description: "Automated responses in multiple languages",
        starter: false,
        growth: true,
        enterprise: true
      }
    ]
  },
  {
    category: "Social Media",
    features: [
      {
        name: "Post Scheduling",
        description: "Schedule posts across multiple platforms",
        starter: false,
        growth: true,
        enterprise: true
      },
      {
        name: "Content Calendar",
        description: "Visual calendar for content planning",
        starter: false,
        growth: true,
        enterprise: true
      },
      {
        name: "Analytics Dashboard",
        description: "Detailed insights and performance metrics",
        starter: false,
        growth: true,
        enterprise: true
      }
    ]
  },
  {
    category: "Marketing",
    features: [
      {
        name: "QR Code Campaigns",
        description: "Create and track QR code campaigns",
        starter: true,
        growth: true,
        enterprise: true
      },
      {
        name: "Campaign Analytics",
        description: "Track campaign performance and ROI",
        starter: false,
        growth: true,
        enterprise: true
      },
      {
        name: "Custom Branding",
        description: "Branded QR codes and marketing materials",
        starter: false,
        growth: true,
        enterprise: true
      }
    ]
  }
];

const FeatureComparison = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Compare Features</h2>
          <p className="text-gray-600">Choose the plan that best fits your needs</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50"></th>
                {["Starter", "Growth", "Enterprise"].map((plan, index) => (
                  <th key={plan} className="p-4 text-left bg-gray-50 w-[200px]">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-lg p-4 ${
                        plan === "Growth" ? "bg-primary/5 border-2 border-primary" : "bg-white"
                      }`}
                    >
                      <h3 className="text-xl font-bold">{plan}</h3>
                      <div className="mt-2">
                        <span className="text-2xl font-bold">
                          {plan === "Enterprise" ? "Custom" : plan === "Growth" ? "$299" : "$199"}
                        </span>
                        {plan !== "Enterprise" && <span className="text-gray-600">/month</span>}
                      </div>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={category.category}>
                  <tr>
                    <td colSpan={4} className="p-4 bg-gray-50 font-semibold">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {feature.name}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="p-4">
                        {feature.starter ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </td>
                      <td className="p-4">
                        {feature.growth ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </td>
                      <td className="p-4">
                        {feature.enterprise ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => window.location.href = "/contact"}
            className="bg-primary text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison; 