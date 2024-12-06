import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description: "We'll get back to you shortly.",
    });
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get Started Today</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Company Name" />
            <Textarea placeholder="Tell us about your needs" />
            <Button type="submit" className="w-full">Request Demo</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;