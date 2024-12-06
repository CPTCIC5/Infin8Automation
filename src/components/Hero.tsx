import { Button } from "@/components/ui/button";
import { ChartBarIncreasing, Star, ShoppingCart, Calendar, Info, Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <ChartBarIncreasing />,
    number: "500+",
    label: "Businesses Automated"
  },
  {
    icon: <Clock />,
    number: "72hrs",
    label: "Setup Time"
  },
  {
    icon: <MessageSquare />,
    number: "1M+",
    label: "Messages Handled"
  },
  {
    icon: <Star />,
    number: "98%",
    label: "Client Satisfaction"
  }
];

const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-b from-background to-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight"
          >
            Automate Your Business <br/>
            <span className="text-primary">Save Time, Grow Faster</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Affordable automation solutions for Florida businesses.<br/>
            From WhatsApp to social media, we handle it all.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-soft"
              onClick={() => window.location.href = "/contact"}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft"
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-secondary">{stat.number}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;