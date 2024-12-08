import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const buttonVariants: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  hover: { scale: 1.1 }
};

const FloatingWhatsApp = () => {
  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://api.whatsapp.com/send/?phone="
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden md:inline">Chat with us</span>
      </a>
    </motion.div>
  );
};

export default FloatingWhatsApp; 