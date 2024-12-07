import { Button } from "@/components/ui/button";
import { MessageSquare, Play, Calendar, Database, BarChart, Building2, ShoppingBag, Store, ExternalLink } from "lucide-react";
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
  const [section2Ref, section2InView] = useInView({ threshold: 0.2 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.2 });

  return (
    <div className="w-full">
      {/* Section 1: Solutions Showcase */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
              Revolutionize Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Business Operations
              </span>
            </h2>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of AI to transform your customer experience and streamline operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-24">
            {[
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "24/7 Customer Support",
                description: "AI-powered responses that understand context and deliver personalized solutions instantly"
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: "Smart Integration",
                description: "Seamlessly connects with your existing tools and enhances your current workflows"
              },
              {
                icon: <BarChart className="w-12 h-12" />,
                title: "Real-Time Analytics",
                description: "Track performance, customer satisfaction, and ROI with detailed insights"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white p-10 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-5 rounded-2xl w-fit mb-8">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-secondary to-primary p-[1px] rounded-3xl"
          >
            <div className="bg-white rounded-3xl p-16">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-8 leading-tight">
                    Ready to Transform Your Business?
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Automate customer interactions",
                      "Increase sales conversion",
                      "Reduce operational costs"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <p className="text-gray-600 text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-xl"
                      onClick={() => window.location.href = "/demo"}
                    >
                      Watch Demo
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-30"></div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                    alt="Business Innovation"
                    className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <motion.div
            ref={section4Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={section4InView ? { opacity: 1, y: 0 } : {}}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Experience the Future of Business
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
              Join forward-thinking businesses leveraging AI to deliver exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                className="bg-white hover:bg-white/90 text-secondary text-lg px-8 py-6 rounded-xl"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Demo
              </Button>
              <Button 
                variant="outline"
                className="bg-white hover:bg-white/90 text-secondary text-lg px-8 py-6 rounded-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PillSections; 