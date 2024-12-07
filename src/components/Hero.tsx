import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-36 pb-24 bg-gradient-to-br from-background via-gray-50/50 to-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8 tracking-wide">
              Next-Gen Business Automation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-[1.15]">
              Transform Your Business
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                With Smart Automation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elevate your Florida business with cutting-edge automation solutions.
              From customer service to sales, we make AI work for you.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-secondary/20 hover:border-secondary text-secondary hover:bg-secondary/5 transition-all duration-300 text-lg px-8"
                onClick={() => window.location.href = "#features"}
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { label: "Client Success Rate", value: "95%" },
              { label: "Average Response", value: "30sec" },
              { label: "Time Saved", value: "60hrs/mo" },
              { label: "Revenue Growth", value: "40%+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;