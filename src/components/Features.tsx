import { Bot, MessageSquare, Zap, BarChart3, Clock, TrendingUp, Smartphone, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import ScrollReveal from "@/components/ScrollReveal";

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapid Implementation",
      description: "Get your automation up and running within 72 hours. Quick setup, immediate results."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Multi-Channel Integration",
      description: "Seamlessly connect WhatsApp, social media, and business tools in one platform."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Track engagement, response times, and conversion rates with detailed insights."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Workflows",
      description: "Build automated processes that match your exact business needs."
    }
  ];

  return (
    <div id="features" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
              Our Features
            </h2>
            <p className="text-gray-600 mt-2">
              Everything you need to automate your business
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group touch-manipulation"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-4 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300 transform group-hover:scale-110">
                        <div className="text-primary group-hover:rotate-6 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 p-4 bg-white/95 backdrop-blur-sm"
                  sideOffset={10}
                >
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;