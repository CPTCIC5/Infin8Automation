import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, DollarSign, Users, BarChart3, ArrowRight } from "lucide-react";

const ReferUs = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Earn While Helping Businesses Grow
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join AI Sales Genio's Affiliate Program and earn up to 30% recurring commission for every successful referral
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=573102569107&text=Hi,%20I%27m%20interested%20in%20becoming%20an%20affiliate%20partner.&type=phone_number&app_absent=0"}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Become an Affiliate Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">High Commission Rates</h3>
              <p className="text-gray-600">Earn up to 30% recurring commission on every successful referral, with lifetime tracking.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">Get personalized support, marketing materials, and training to maximize your success.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600">Track your referrals, commissions, and performance with our comprehensive dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Commission Structure
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-6">
                {commissionTiers.map((tier, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div>
                      <h3 className="font-semibold text-lg">{tier.level}</h3>
                      <p className="text-gray-600">{tier.requirement}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">{tier.commission}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our affiliate program today and start earning recurring commissions
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=573102569107&text=Hi,%20I%27m%20interested%20in%20becoming%20an%20affiliate%20partner.&type=phone_number&app_absent=0"}
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const steps = [
  {
    title: "Apply to Join",
    description: "Fill out our simple application form. We'll review your application and get back to you within 24 hours."
  },
  {
    title: "Get Your Unique Link",
    description: "Once approved, receive your unique affiliate link and marketing materials to start promoting."
  },
  {
    title: "Share and Promote",
    description: "Share your link with your network and use our marketing materials to promote AI Sales Genio."
  },
  {
    title: "Track Your Earnings",
    description: "Monitor your referrals and earnings in real-time through our affiliate dashboard."
  },
  {
    title: "Get Paid",
    description: "Receive your commission payments monthly for all successful referrals."
  }
];

const commissionTiers = [
  {
    level: "Standard Partner",
    requirement: "1-5 referrals per month",
    commission: "20%"
  },
  {
    level: "Gold Partner",
    requirement: "6-10 referrals per month",
    commission: "25%"
  },
  {
    level: "Platinum Partner",
    requirement: "11+ referrals per month",
    commission: "30%"
  }
];

export default ReferUs; 

