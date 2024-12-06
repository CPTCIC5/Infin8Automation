import { motion } from "framer-motion";

interface LoadingStateProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
}

const LoadingState = ({ size = "md", color = "primary" }: LoadingStateProps) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };

  const colors = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} ${colors[color]} border-2 border-current border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default LoadingState; 