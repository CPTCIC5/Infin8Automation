import { Bot, MessageSquare, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Features = () => {
  const features = [
    {
      icon: (
        <img 
          src="openai-2.svg" 
          alt="OpenAI" 
          className="h-8 w-8"
        />
      ),
      title: "AI-Powered Conversations",
      description: "Leverage advanced AI technology to handle customer inquiries, provide product recommendations, and maintain engaging conversations 24/7. Our AI understands context and learns from interactions to deliver increasingly personalized experiences."
    },
    {
      icon: (
        <img 
          src="wp-img2.png"
          alt="WhatsApp" 
          className="h-8 w-8"
        />
      ),
      title: "WhatsApp Marketing Campaigns",
      description: "Create and manage targeted marketing campaigns directly through WhatsApp. Reach customers where they are most active, with personalized messages, promotions, and updates that drive engagement and conversions."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart CRM",
      description: "Automatically capture and organize customer data, track interactions, and gain valuable insights into customer behavior. Our Smart CRM helps you build stronger relationships and make data-driven decisions."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Insights",
      description: "Get detailed analytics on customer interactions, campaign performance, and sales metrics. Monitor key KPIs, identify trends, and optimize your strategies for better results."
    }
  ];

  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-secondary">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;