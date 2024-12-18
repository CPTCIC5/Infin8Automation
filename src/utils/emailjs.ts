import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL'; // We'll get this in step 2

export const sendEmail = async (formData: any) => {
  try {
    // Send email via EmailJS
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData
    );

    // Store in Google Sheets
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      })
    });

    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 