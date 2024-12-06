import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alternate";
  noPadding?: boolean;
}

const SectionWrapper = ({ 
  children, 
  className, 
  id,
  variant = "default",
  noPadding = false
}: SectionWrapperProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "relative",
        variant === "alternate" ? "bg-background-secondary" : "bg-background",
        !noPadding && "py-16 md:py-24",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SectionWrapper; 