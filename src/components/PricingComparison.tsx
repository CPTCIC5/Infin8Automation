import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$199",
    setup: "$399",
    description: "Perfect for small businesses just getting started with automation",
    features: [
      { name: "WhatsApp Automation", included: true },
      { name: "QR Code Campaigns", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Social Media Automation", included: false },
      { name: "Google Business Profile", included: false },
      { name: "Multi-location Support", included: false },
    ]
  },
  {
    name: "Growth",
    price: "$299",
    setup: "$499",
    popular: true,
    description: "Ideal for growing businesses needing comprehensive automation",
    features: [
      { name: "WhatsApp Automation", included: true },
      { name: "QR Code Campaigns", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Social Media Automation", included: true },
      { name: "Google Business Profile", included: true },
      { name: "Multi-location Support", included: false },
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    setup: "Custom",
    description: "Tailored solutions for large businesses with specific needs",
    features: [
      { name: "WhatsApp Automation", included: true },
      { name: "QR Code Campaigns", included: true },
      { name: "Enterprise Analytics", included: true },
      { name: "Social Media Automation", included: true },
      { name: "Google Business Profile", included: true },
      { name: "Multi-location Support", included: true },
    ]
  }
];

const PricingComparison = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-50"></th>
            {plans.map((plan, index) => (
              <th key={index} className="p-4 text-left bg-gray-50">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-lg p-6 ${plan.popular ? 'bg-primary/5 border-2 border-primary' : 'bg-white'}`}
                >
                  {plan.popular && (
                    <span className="text-primary text-sm font-medium mb-2 block">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">Setup: {plan.setup}</p>
                  <p className="text-sm text-gray-600 mt-4">{plan.description}</p>
                </motion.div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans[0].features.map((feature, featureIndex) => (
            <tr key={featureIndex} className="border-b">
              <td className="p-4 font-medium">{feature.name}</td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex} className="p-4">
                  {plan.features[featureIndex].included ? (
                    <Check className="h-5 w-5 text-primary" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-4"></td>
            {plans.map((plan, index) => (
              <td key={index} className="p-4">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary' : 'bg-secondary'} text-white hover:opacity-90`}
                  onClick={() => window.location.href = "/contact"}
                >
                  Get Started
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparison; 