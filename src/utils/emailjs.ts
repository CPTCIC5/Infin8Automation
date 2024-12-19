const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYMENT_URL'; // Replace with your actual Google Script URL

export const submitToGoogleSheets = async (formData: any) => {
  try {
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

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 