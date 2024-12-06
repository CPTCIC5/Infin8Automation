import { Button } from "@/components/ui/button";
import { ChartBarIncreasing, Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-[rgb(254,255,250)] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-[2.7rem] lg:text-[3.4rem] font-bold text-secondary mb-6 leading-tight"
          >
            Are Your <span className="text-[#1FB355]">WhatsApp</span> and Sales<br className="mb-1" />
            Interactions Driving <span className="text-[#1FB355]">Profit</span>?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[1.3rem] md:text-[1.4rem] text-gray-600 mb-8"
          >
          <span className="font-bold">AI Sales Genio</span> helps you create unlimited <span className="text-[#1FB355]">personalization promotions</span>, AI-powered <br></br> WhatsApp experiences that builds trust, delight customers and <span className="text-[#1FB355]">drive sales effortlessly</span>.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-up animation-delay-200">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = "https://outlook.office.com/bookwithme/user/8ef8abcb1a04480ab07f1f7165fbfd2f%40salesgenio.ai?anonymous&isanonymous=true"}
            >
              <Star className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            <a href="https://app.salesgenio.ai/login">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Free Trial
            </Button>
            </a>
          </div>
          <div className="flex justify-center gap-8 pt-8 animate-fade-up animation-delay-300">
            <div className="text-center">
              <ChartBarIncreasing className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-2xl text-secondary mb-1">30%</p>
              <p className="text-sm text-gray-600">Increase Sales</p>
            </div>
            <div className="text-center">
              <img src="wp-img2.png" alt="WhatsApp" className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold text-2xl text-secondary mb-1">24/7</p>
              <p className="text-sm text-gray-600">WhatsApp Integration</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-2xl text-secondary mb-1">90%</p>
              <p className="text-sm text-gray-600">Customer Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;