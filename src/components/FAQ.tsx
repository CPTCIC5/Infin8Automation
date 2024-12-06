import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can you set up automation?",
    answer: "Most systems are live within 72 hours. We handle all setup and customization."
  },
  {
    question: "What's included in the monthly fee?",
    answer: "System maintenance, updates, technical support, and workflow optimization."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No technical knowledge needed. We handle all technical aspects for you."
  },
  {
    question: "Can I customize the workflows?",
    answer: "Yes! Everything is customized to match your exact business needs."
  },
  {
    question: "What support do you provide?",
    answer: "24/7 monitoring and business-hours support via WhatsApp, email, and phone."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Common Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-soft overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-4 text-left flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 