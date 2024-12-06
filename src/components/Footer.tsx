import { Facebook, Linkedin, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { 
      name: "Contact Us", 
      href: "https://api.whatsapp.com/send/?phone=573102569107&text&type=phone_number&app_absent=0",
      isExternal: true 
    },
    { 
      name: "FAQ", 
      href: "#",
      isExternal: true 
    },
    { 
      name: "Privacy Policy", 
      href: "/privacy-policy",
      isExternal: false 
    },
    { 
      name: "Terms & Conditions", 
      href: "/terms-conditions",
      isExternal: false 
    }
  ];

  const socialLinks = [
    { 
      icon: MessageSquare, 
      href: "https://wa.me/573102569107",
      label: "WhatsApp"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/104763514/admin/dashboard/",
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61567322537325",
      label: "Facebook"
    },
    {
      icon: Share2,
      href: "https://www.reddit.com/r/AISalesGenio/",
      label: "Reddit"
    }
  ];

  return (
    <footer className="bg-white/90 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((link, index) => (
            link.isExternal ? (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-whatsapp transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={link.href}
                className="text-gray-600 hover:text-whatsapp transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-whatsapp transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        
        <p className="text-center text-gray-600 mt-8">
          © 2024 AI Sales Genio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;