import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jill",
    role: "Owner, South Florida Escapes",
    text: "INFIN8 Automation transformed our social media workflow. Now, all I do is take photos and record a voice memo! The automation handles everything else perfectly.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    type: "Social Media Automation"
  },
  {
    name: "Todd",
    role: "Owner, Rain Tech Seamless Gutters",
    text: "Customer follow-ups are completely automated. We never miss a lead! The WhatsApp integration has made our communication so much more efficient.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    type: "Lead Management"
  },
  {
    name: "Maria",
    role: "Manager, Boutique Salon Chain",
    text: "The appointment scheduling automation has been a game-changer. Our staff can focus on clients instead of managing bookings.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    type: "Appointment Automation"
  },
  {
    name: "James",
    role: "Restaurant Group Director",
    text: "Their social media automation has helped us maintain consistent posting across all our locations. The QR code integration for menus is brilliant!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    type: "Multi-location Management"
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
