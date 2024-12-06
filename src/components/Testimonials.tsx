import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Shopify Store Owner",
    text: "Since integrating AI Sales Genio with my Shopify store, our sales have grown 200%. The AI handles product inquiries 24/7, recommends items based on customer preferences, and our conversion rate has doubled. It's like having a full sales team working round the clock!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    type: "E-commerce"
  },
  {
    name: "David Wilson",
    role: "Wine Store Owner",
    text: "The Product Mastery Agent makes it easy for customers to find their perfect wine. Our customer retention has improved significantly.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    type: "Complex Catalog"
  },
  {
    name: "Michael Chen",
    role: "SMB Manufacturing Owner",
    text: "Finally, enterprise-level AI capabilities at a price point that makes sense for my business. Our customer engagement has never been better.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    type: "Manufacturer"
  },
  {
    name: "Isabella Martinez",
    role: "Hotel Events Manager",
    text: "The AI-driven promotions have revolutionized how we engage with guests. Our event bookings have increased by 150%!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    type: "Hospitality"
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-black text-center mb-10">
        Success Stories That Could Be Yours
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-primary/20"
            />
            <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
            <div className="border-t pt-4">
              <p className="font-bold text-secondary">{testimonial.name}</p>
              <p className="text-sm text-primary">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
