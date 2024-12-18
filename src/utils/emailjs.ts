import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL'; // Replace with your actual Google Script URL

export const sendEmail = async (formData: any) => {
  try {
    // Send email via EmailJS
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData
    );

    // Format data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      businessName: formData.businessName,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    // Store in Google Sheets
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData)
    });

    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 