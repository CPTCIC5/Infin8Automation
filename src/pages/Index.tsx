import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PillSections from "@/components/PillSections";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProofBanner from "@/components/SocialProofBanner";
import LiveNotifications from "@/components/LiveNotifications";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <SocialProofBanner />
      <Features />
      <PillSections />
      <BlogPreview />
      <Footer />
      <FloatingWhatsApp />
      <LiveNotifications />
    </div>
  );
};

export default Index;