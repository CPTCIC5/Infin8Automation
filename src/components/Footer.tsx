import { Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { 
      name: "About Us",
      href: "/#about",
      isExternal: false 
    },
    { 
      name: "Contact",
      href: "/contact",
      isExternal: false 
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

  const serviceLinks = [
    {
      name: "WhatsApp Automation",
      href: "/#services"
    },
    {
      name: "Social Media Management",
      href: "/#services"
    },
    {
      name: "QR Code Campaigns",
      href: "/#services"
    },
    {
      name: "Business Analytics",
      href: "/#services"
    }
  ];

  const socialLinks = [
    { 
      icon: MessageSquare,
      href: "https://wa.me/+1234567890",
      label: "WhatsApp"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/infin8automation",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/infin8automation",
      label: "Facebook"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/infin8automation",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <img src="/logo-2.png" alt="INFIN8" className="h-8 w-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Empowering Florida businesses with intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="block font-medium">Email:</span>
                support@infin8automation.com
              </p>
              <p className="text-gray-600">
                <span className="block font-medium">Hours:</span>
                Mon - Fri: 9:00 AM - 6:00 PM EST
              </p>
              <p className="text-gray-600">
                <span className="block font-medium">Location:</span>
                Florida, United States
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} INFIN8 Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;