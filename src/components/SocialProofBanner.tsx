import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

const SocialProofBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const brands = [
    { name: "Meta", logo: "meta-logo-12362.svg", className: "h-24 md:h-28" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Microsoft", logo: "microsoft-logo-svgrepo-com.svg", className: "h-24 md:h-28" },
    { name: "OpenAI", logo: "openai-2.svg", className: "h-20 md:h-20" }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="py-8 bg-gray-50 border-y border-gray-200"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-6">Trusted Partners of</p>
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