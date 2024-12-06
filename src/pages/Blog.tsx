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
      title: "How AI is Revolutionizing WhatsApp Business",
      excerpt: "Discover how AI-powered conversations are transforming customer service and sales through WhatsApp Business API integration...",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070",
      date: "March 15, 2024",
      category: "AI Technology",
      readTime: "5 min read"
    },
    {
      title: "10 Ways to Boost Sales with AI Sales Genio",
      excerpt: "Learn the proven strategies our most successful clients use to increase revenue and improve customer satisfaction...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80",
      date: "March 10, 2024",
      category: "Sales Strategy",
      readTime: "8 min read"
    },
    {
      title: "The Future of Customer Service",
      excerpt: "See how AI and human agents work together to deliver exceptional experiences that keep customers coming back...",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80",
      date: "March 5, 2024",
      category: "Customer Experience",
      readTime: "6 min read"
    },
    {
      title: "WhatsApp Marketing: A Complete Guide",
      excerpt: "Master the art of WhatsApp marketing with our comprehensive guide to engaging customers and driving sales...",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da",
      date: "March 1, 2024",
      category: "Marketing",
      readTime: "10 min read"
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
                    onClick={() => navigate(`/blog/how-ai-revolutionizing-whatsapp`)}
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