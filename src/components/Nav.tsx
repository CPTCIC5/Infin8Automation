import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import BookDemoButton from './BookDemoButton';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
          <a onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
            <img src="/logo/infin8.jpg" alt="INFIN8 Automation" className="h-12 md:h-16 w-auto"/>
          </a>
          <span className="text-lg md:text-xl font-bold text-secondary">INFIN8</span>
        </div>
        {/* Right Section: Navigation Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <Button 
            variant="ghost" 
            className="text-secondary"
            onClick={() => handleNavigation('/')}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="text-secondary"
            onClick={() => handleNavigation('/', 'features')}
          >
            Features
          </Button>
          <Button 
            variant="ghost" 
            className="text-secondary"
            onClick={() => handleNavigation('/about')}
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            className="text-secondary"
            onClick={() => handleNavigation('/blog')}
          >
            Blog
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.location.href = "/contact"}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Get Started
          </Button>
          <div className="hidden md:block">
            <BookDemoButton />
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Nav;