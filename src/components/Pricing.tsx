import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookDemoButton from './BookDemoButton';

const plans = [
  {
    name: "Starter Plan",
    price: "$199",
    setup: "$399",
    features: [
      "WhatsApp automation",
      "QR code campaigns",
      "Basic customer support",
      "Monthly maintenance",
      "System updates"
    ]
  },
  {
    name: "Growth Plan",
    price: "$299",
    setup: "$499",
    features: [
      "All Starter Plan features",
      "Social media automation",
      "Facebook & Instagram integration",
      "Blog automation",
      "Monthly analytics",
      "Priority support"
    ]
  },
  {
    name: "Custom Plan",
    price: "Custom",
    setup: "Custom",
    features: [
      "All Growth Plan features",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 priority support"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            Choose the plan that best fits your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/month</span>
                <p className="text-gray-600 mt-2">Setup: {plan.setup}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.location.href = "/contact"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <BookDemoButton className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Pricing; 