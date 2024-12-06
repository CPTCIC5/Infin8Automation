import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LiveNotifications = () => {
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const notifications = [
      "Someone just automated their WhatsApp",
      "A business saved 15 hours this week",
      "New social media automation setup"
    ];

    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(randomNotification);
      setTimeout(() => setNotification(null), 3000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to show notification
        showNotification();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-soft max-w-xs"
        >
          <p className="text-sm text-gray-600">{notification}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveNotifications; 