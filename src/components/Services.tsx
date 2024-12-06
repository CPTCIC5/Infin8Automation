import { MessageSquare, Instagram, QrCode, Search } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "WhatsApp Automation",
    description: "Automate appointment bookings and confirmations. Schedule reminders and follow-ups for clients.",
    price: "$399 setup + $199/month"
  },
  {
    icon: <Instagram className="h-8 w-8" />,
    title: "Social Media Automation",
    description: "Integrate Instagram, Facebook, and blog posts. Automate captions, hashtags, and publishing schedules.",
    price: "$499 setup + $199/month"
  },
  {
    icon: <QrCode className="h-8 w-8" />,
    title: "QR Code Campaigns",
    description: "Create QR codes for flyers, business cards, or storefronts. Connect customers to booking systems.",
    price: "$99 per campaign"
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Google Business Profile",
    description: "Optimize search rankings with automated customer engagement. Improve local visibility.",
    price: "$199 one-time setup"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive automation solutions for your business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="bg-primary/10 p-4 rounded-lg mb-4 w-fit">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 