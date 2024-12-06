import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-8">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/'}
                className="text-gray-600 hover:text-secondary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
            
            <h1 className="text-4xl font-bold text-secondary mb-8">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Welcome to Value Amplify producer of Sales Genio AI!</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Agreement to Terms</h2>
                <p className="text-gray-700">
                  These terms and conditions outline the rules and regulations for the use of Value Amplify producer of Sales Genio AI' Website, located at salesgenio.ai. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Value Amplify producer of Sales Genio AI if you do not agree to take all of the terms and conditions stated on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">License</h2>
                <p className="text-gray-700">
                  Unless otherwise stated, Value Amplify producer of Sales Genio AI and/or its licensors own the intellectual property rights for all material on Value Amplify producer of Sales Genio AI. All intellectual property rights are reserved. You may access this from Value Amplify producer of Sales Genio AI for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">User Engagement</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Republish material from Value Amplify producer of Sales Genio AI</li>
                  <li>Sell, rent, or sub-license material from Value Amplify producer of Sales Genio AI</li>
                  <li>Reproduce, duplicate, or copy material from Value Amplify producer of Sales Genio AI</li>
                  <li>Redistribute content from Value Amplify producer of Sales Genio AI</li>
                </ul>
                <p className="text-gray-700">This Agreement shall begin on the date hereof.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Parts of this Website Offer an Opportunity for Users to Post and Exchange Opinions and Information</h2>
                <p className="text-gray-700">
                Value Amplify producer of Sales Genio AI does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Value Amplify producer of Sales Genio AI, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Value Amplify producer of Sales Genio AI shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.                </p>
                <p className="text-gray-700 mt-4">
                Value Amplify producer of Sales Genio AI reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Disclaimer</h2>
                <p className="text-gray-700">
                  The information provided by Value Amplify producer of Sales Genio AI on salesgenio.ai is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Governing Law & Jurisdiction</h2>
                <p className="text-gray-700">
                  These Terms will be governed by and interpreted in accordance with the laws of the State of Puerto Rico, United States. You submit to the non-exclusive jurisdiction of the state and federal courts located in Río grande, PR for the resolution of any disputes.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions; 