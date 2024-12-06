import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPreview = () => {
  const posts = [
    {
      title: "How AI is Revolutionizing WhatsApp Business",
      excerpt: "Discover how AI-powered conversations are transforming customer service and sales...",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070",
      date: "March 2024"
    },
    {
      title: "10 Ways to Boost Sales with AI Sales Genio",
      excerpt: "Learn the proven strategies our most successful clients use to increase revenue...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80",
      date: "March 2024"
    },
    {
      title: "The Future of Customer Service",
      excerpt: "See how AI and human agents work together to deliver exceptional experiences...",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80",
      date: "March 2024"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">Latest Insights</h2>
          <Button variant="outline" className="text-primary border-primary">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 