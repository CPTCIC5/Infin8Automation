import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}

const FormInput = ({
  label,
  type = "text",
  placeholder,
  error,
  success,
  required,
  onChange
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          className={`
            w-full transition-all duration-200
            ${error ? 'border-red-500 focus:border-red-500' : ''}
            ${success ? 'border-green-500 focus:border-green-500' : ''}
            ${isFocused ? 'ring-2 ring-primary/20' : ''}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange?.(e.target.value)}
        />
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {error ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormInput; 