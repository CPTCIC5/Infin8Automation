"use client"
import { motion } from 'framer-motion';
import { MessageSquare, Clock, TrendingUp, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-secondary mb-6">About Infin8 Automation</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We automate customer conversations via text to help businesses save time and close more sales. 
            Our AI-powered platform handles everything from initial inquiries to appointment scheduling, 
            allowing your team to focus on what matters most - growing your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Communication</h3>
              <p className="text-gray-600">Automated responses that feel personal and human</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
              <p className="text-gray-600">Reduce response time from hours to seconds</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Focus</h3>
              <p className="text-gray-600">Convert more leads while doing less work</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary mb-8">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-primary/5 rounded-lg hover:shadow-md transition-shadow">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-gray-800 font-medium">Save Time with Automated Follow-Ups</p>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg hover:shadow-md transition-shadow">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-gray-800 font-medium">Convert More Leads with Texting</p>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg hover:shadow-md transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-gray-800 font-medium">Easily Book Appointments with Automation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
