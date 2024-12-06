import { ClipboardList, Cog, Zap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: "1. Consultation",
    description: "We discuss your business needs and identify automation opportunities."
  },
  {
    icon: <Cog className="h-8 w-8" />,
    title: "2. Setup",
    description: "Systems are installed and customized within 72 hours."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "3. Automation",
    description: "You run your business while automation handles the rest."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">How It Works</h2>
          <p className="text-gray-600">Simple steps to automate your business</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="text-primary">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 