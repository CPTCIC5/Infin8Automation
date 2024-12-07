export const initCalendly = () => {
  // Initialize Calendly widget
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initInlineWidget({
      url: '/contact',
      parentElement: document.getElementById('calendly-embed'),
    });
  }
};

export const openCalendlyPopup = () => {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: '/contact',
    });
  }
}; 