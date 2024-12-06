import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

const SocialProofBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const brands = [
    { 
      name: "WhatsApp Business", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      className: "h-12 md:h-16" 
    },
    { 
      name: "Instagram", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
      className: "h-12 md:h-16" 
    },
    { 
      name: "Facebook", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      className: "h-10 md:h-14" 
    },
    { 
      name: "Google Business", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Google_My_Business_Logo.svg",
      className: "h-12 md:h-16" 
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="py-8 bg-gray-50 border-y border-gray-200"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-6">Integrated With Leading Platforms</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className={cn(
                "w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all",
                brand.className || "h-8 md:h-12"
              )}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialProofBanner; 