import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPreview = () => {
  const posts = [
    {
      title: "Automating Your Business: A Complete Guide",
      excerpt: "Learn how to streamline your operations with WhatsApp and social media automation...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      date: "March 2024"
    },
    {
      title: "QR Codes: Bridging Physical and Digital",
      excerpt: "How businesses are using QR codes to enhance customer experience...",
      image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef",
      date: "March 2024"
    },
    {
      title: "Social Media Automation Success Stories",
      excerpt: "See how businesses are saving 10+ hours weekly with automated posting...",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
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