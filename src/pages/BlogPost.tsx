import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2, MessageSquare } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

// This would typically come from an API/CMS
const blogPosts = {
  "how-ai-revolutionizing-whatsapp": {
    title: "How AI is Revolutionizing WhatsApp Business",
    excerpt: "Discover how AI-powered conversations are transforming customer service and sales through WhatsApp Business API integration...",
    content: `
      <h2>The Evolution of Customer Communication</h2>
      <p>In today's fast-paced digital world, customers expect instant, personalized responses at any time of day. Traditional customer service models struggle to meet these expectations, leading to frustrated customers and lost opportunities.</p>

      <h2>Enter AI-Powered WhatsApp Business</h2>
      <p>AI Sales Genio is transforming how businesses use WhatsApp by:</p>
      <ul>
        <li>Providing instant, 24/7 customer support</li>
        <li>Personalizing responses based on customer history</li>
        <li>Automating routine inquiries while maintaining a human touch</li>
        <li>Scaling customer service without increasing costs</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>Businesses using AI-powered WhatsApp solutions are seeing remarkable results:</p>
      <ul>
        <li>90% reduction in response time</li>
        <li>40% increase in customer satisfaction</li>
        <li>50% reduction in support costs</li>
        <li>35% increase in sales conversion rates</li>
      </ul>

      <h2>Getting Started with AI WhatsApp Integration</h2>
      <p>Implementing AI in your WhatsApp Business strategy is easier than you might think. Here's how to get started:</p>
      <ol>
        <li>Assess your current customer communication challenges</li>
        <li>Identify key automation opportunities</li>
        <li>Choose the right AI solution for your needs</li>
        <li>Train your AI with your business knowledge</li>
        <li>Monitor and optimize performance</li>
      </ol>
    `,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070",
    date: "March 15, 2024",
    category: "AI Technology",
    readTime: "5 min read",
    author: {
      name: "Alex Thompson",
      role: "AI Technology Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    relatedPosts: [
      {
        title: "10 Ways to Boost Sales with AI Sales Genio",
        slug: "10-ways-boost-sales"
      },
      {
        title: "The Future of Customer Service",
        slug: "future-customer-service"
      }
    ]
  }
  // Add more blog posts here
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Button 
              variant="ghost" 
              className="mb-8"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="bg-primary/90 text-white px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 pt-4">
                <img 
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <motion.article 
              className="lg:col-span-3 prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share Buttons */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                    >
                      {relatedPost.title}
                    </Button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost; 