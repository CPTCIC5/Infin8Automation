import { Button } from "@/components/ui/button";
import { MessageSquare, Play, Calendar, Database, BarChart, Building2, ShoppingBag, Store, Instagram, QrCode, Clock, Settings, TrendingUp, Scissors, Utensils, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Hotel Manager",
    text: "AI Sales Genio transformed how we handle guest inquiries. Response times are down 90% and booking conversions are up.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    impact: "90% Faster Response Time!"
  },
  {
    name: "David Wilson",
    role: "Wine Store Owner",
    text: "The Product Mastery Agent makes it easy for customers to find their perfect wine. Our customer retention has improved significantly.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    impact: "Expert Recommendations at Scale!"
  }
];

const PillSections = () => {
  const benefits = [
    {
      title: "Time Saved",
      description: "Automate repetitive tasks",
      stat: "20+ hours/week"
    },
    {
      title: "Response Time",
      description: "Instant customer engagement",
      stat: "< 1 minute"
    },
    {
      title: "ROI",
      description: "Average return on investment",
      stat: "300%"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-full px-8 py-4 shadow-soft flex items-center gap-4"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{benefit.stat}</p>
                <h3 className="font-semibold text-secondary">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillSections; 