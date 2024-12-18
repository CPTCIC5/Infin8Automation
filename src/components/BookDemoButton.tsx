import { openCalendlyScheduler } from '../utils/calendly';

interface BookDemoButtonProps {
  className?: string;
}

const BookDemoButton = ({ className = '' }: BookDemoButtonProps) => {
  return (
    <button
      onClick={openCalendlyScheduler}
      className={`bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 ${className}`}
    >
      Book a Demo
    </button>
  );
};

export default BookDemoButton; 