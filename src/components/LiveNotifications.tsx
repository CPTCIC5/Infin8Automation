import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  "Sarah just started using AI Sales Genio 🎉",
  "New customer from Spain joined 🌍",
  "50+ messages handled automatically today ⚡",
  "Customer satisfaction rate: 98% today 🌟"
];

const LiveNotifications = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 4000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="fixed top-24 right-4 bg-white shadow-lg rounded-lg p-4 z-50 max-w-sm"
        >
          <p className="text-sm text-gray-800">
            {notifications[currentNotification]}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveNotifications; 