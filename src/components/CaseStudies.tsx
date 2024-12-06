import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "South Florida Escapes",
    category: "Social Media Automation",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    results: [
      "90% reduction in social media management time",
      "200% increase in post consistency",
      "45% growth in engagement"
    ],
    quote: "Now, all I do is take photos and record a voice memo! The automation handles everything else perfectly.",
    author: "Jill, Owner"
  },
  {
    title: "Rain Tech Seamless Gutters",
    category: "Lead Management",
    image: "https://images.unsplash.com/photo-1518736346281-76db09f7c4e9",
    results: [
      "100% lead follow-up rate",
      "2-hour average response time",
      "35% increase in conversions"
    ],
    quote: "Customer follow-ups are completely automated. We never miss a lead!",
    author: "Todd, Owner"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Success Stories</h2>
          <p className="text-gray-600">See how businesses are transforming with automation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-4">
                  "{study.quote}"
                  <footer className="text-sm font-medium text-gray-500 mt-2">
                    - {study.author}
                  </footer>
                </blockquote>

                <Button 
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => window.location.href = "/contact"}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 