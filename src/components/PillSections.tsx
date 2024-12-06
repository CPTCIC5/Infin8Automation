import { Button } from "@/components/ui/button";
import { MessageSquare, Play, Calendar, Database, BarChart, Building2, ShoppingBag, Store } from "lucide-react";
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
  // Create separate refs for each section that needs animation
  const [section1Ref, section1InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [section4Ref, section4InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [section5Ref, section5InView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="w-full">
      {/* Section 1: Problem Identification */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={section1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={section1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Your Customers Want More Than Products
              </h2>
              <p className="text-lg text-gray-600">
                They want connection, answers, and experiences in WhatsApp that feel personal. 
                But scaling that kind of service can feel impossible.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <span className="text-sm">❌</span> Struggling to respond to customers quickly enough?
                </p>
                <p className="text-gray-700">
                  <span className="text-sm">❌</span> Losing sales because your team can't keep up?
                </p>
                <p className="text-gray-700">
                  <span className="text-sm">❌</span> Worried competitors are delivering better experiences?
                </p>
              </div>
              <p className="text-lg font-medium text-secondary">
                We understand how frustrating it is to feel like your brand isn't living up to its potential.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070"
                alt="Customer Service Challenge"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: ASG as Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={section2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={section2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80"
                alt="AI Sales Genio Solution"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Transform Your Customer Experience
              </h2>
              <p className="text-lg text-gray-600">
                At AI Sales Genio (ASG), we believe growing your business shouldn't mean losing the personal touch that makes your brand special.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">AI Instant Engagement</h3>
                    <p className="text-gray-600">Responds instantly to every customer inquiry</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Smart CRM Integration</h3>
                    <p className="text-gray-600">Personalizes conversations to reflect your brand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BarChart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">WhatsApp Marketing</h3>
                    <p className="text-gray-600">Drives more sales through tailored recommendations</p>
                  </div>
                </div>
              </div>
              <br></br>
              <a href="https://api.whatsapp.com/send/?phone=573102569107">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <MessageSquare className="mr-2 h-4 w-4" />
                Get Started Today
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Enhanced Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Success Stories That Could Be Yours
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
                <p className="text-primary font-medium mt-4">{testimonial.impact}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Without AI Sales Genio:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Customers could turn to competitors for faster, better service</li>
              <li>• Valuable sales opportunities might be lost</li>
              <li>• Your brand risks blending in instead of standing out</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary/95 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            ref={section4Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={section4InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Take Control of Your Customer Experience Today
              </h2>
              <p className="text-lg opacity-90">
                Join businesses that are transforming their customer relationships with AI-powered conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                  onClick={() => window.location.href = "https://outlook.office.com/bookwithme/user/8ef8abcb1a04480ab07f1f7165fbfd2f%40salesgenio.ai?anonymous&isanonymous=true"}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Free Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-full sm:w-auto" 
                  onClick={() => window.location.href = "https://youtu.be/s6oPfaLTKeM"}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch How It Works
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80"
                alt="Customer Success"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Close with Confidence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={section5Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={section5InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80"
                alt="Business Trust"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600">
                ASG is already trusted by businesses in luxury hotels, international e-commerce, and more. From increasing customer satisfaction to boosting revenue, we're here to help you succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">Luxury Hotels & Hospitality</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">International E-commerce</span>
                </div>
                <div className="flex items-center gap-3">
                  <Store className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">Retail & Consumer Goods</span>
                </div>
              </div>
              <p className="text-lg font-medium text-secondary">
                Your customers deserve an experience they'll remember. Your business deserves tools that make it thrive. Let ASG guide you to both.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.location.href = "https://outlook.office.com/bookwithme/user/8ef8abcb1a04480ab07f1f7165fbfd2f%40salesgenio.ai?anonymous&isanonymous=true"}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PillSections; 