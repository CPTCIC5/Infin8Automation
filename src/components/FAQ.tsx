import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can you set up the automation?",
    answer: "Most systems are set up within 72 hours. After our initial consultation, we customize and implement your automation solutions, ensuring everything is working perfectly before handover."
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Your monthly fee includes system maintenance, regular updates, technical support, and ongoing optimization of your automation workflows. We ensure your systems run smoothly 24/7."
  },
  {
    question: "Can I customize the automation workflows?",
    answer: "Yes! We build custom workflows tailored to your business needs. Whether it's specific WhatsApp responses, social media posting schedules, or QR code campaigns, everything is customizable."
  },
  {
    question: "Do you offer multi-location support?",
    answer: "Yes, our Enterprise plan includes multi-location support. We can help manage automation across different locations while maintaining consistent branding and messaging."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3 md:mb-4">Common Questions</h2>
          <p className="text-gray-600 text-sm md:text-base">Everything you need to know about our automation services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-semibold text-left text-sm md:text-base">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white/50 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
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