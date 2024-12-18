import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

export const sendEmail = async (formData: any) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',  // Replace with your Service ID
      'YOUR_TEMPLATE_ID', // Replace with your Template ID
      formData
    );
    return result;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}; 