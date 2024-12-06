import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "Automating Your Business: A Complete Guide",
      excerpt: "Learn how to streamline your operations with WhatsApp and social media automation. We'll show you step-by-step how to automate customer communications, appointment scheduling, and social media management.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      date: "March 15, 2024",
      category: "Automation",
      readTime: "8 min read",
      slug: "automating-your-business-complete-guide"
    },
    {
      title: "QR Codes: Bridging Physical and Digital",
      excerpt: "Discover how businesses are using QR codes to enhance customer experience, streamline ordering processes, and create interactive marketing campaigns.",
      image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef",
      date: "March 10, 2024",
      category: "Marketing",
      readTime: "6 min read",
      slug: "qr-codes-bridging-physical-digital"
    },
    {
      title: "Social Media Automation Success Stories",
      excerpt: "Real businesses share how they're saving 10+ hours weekly with automated posting. Learn their strategies and best practices for social media automation.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
      date: "March 5, 2024",
      category: "Case Studies",
      readTime: "5 min read",
      slug: "social-media-automation-success-stories"
    },
    {
      title: "WhatsApp Business Automation Strategies",
      excerpt: "Maximize your WhatsApp Business potential with automated responses, appointment scheduling, and customer support workflows.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da",
      date: "March 1, 2024",
      category: "WhatsApp",
      readTime: "7 min read",
      slug: "whatsapp-business-automation-strategies"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-secondary mb-6"
            >
              Latest Insights & Updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Stay updated with the latest trends in AI, WhatsApp marketing, and customer experience
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 md:h-64">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-secondary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/90"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 