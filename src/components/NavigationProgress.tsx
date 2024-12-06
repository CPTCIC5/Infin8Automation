import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const NavigationProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <motion.div
        className="h-1 bg-primary origin-left"
        style={{ scaleX }}
      />
      <div className="h-16 bg-background/80 backdrop-blur-md border-b border-gray-200/80">
        {/* Navigation content */}
      </div>
    </motion.div>
  );
};

export default NavigationProgress; 