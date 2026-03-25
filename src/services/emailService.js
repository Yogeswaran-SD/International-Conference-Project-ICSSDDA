import emailjs from 'emailjs-com';

// Initialize EmailJS
// Please replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// Get it from: https://dashboard.emailjs.com/admin/account
emailjs.init('aiQu_oppvvYF-ZQI9');

// Email configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_62km31f',      // Get from https://dashboard.emailjs.com/admin/services
  PAPER_TEMPLATE_ID: 'template_6qm5lam',
  CONTACT_TEMPLATE_ID: 'template_m0ve7w1',
  TO_EMAIL: 'yogeswaran.cse@gmail.com'
};

// Send Paper Submission Email
export const sendPaperSubmissionEmail = async (formData) => {
  try {
    const templateParams = {
      to_email: EMAIL_CONFIG.TO_EMAIL,
      from_email: formData.email,
      paper_title: formData.title,
      institution_name: formData.institute,
      author_name: formData.author,
      author_email: formData.email,
      paper_category: formData.category,
      file_name: formData.file?.name || 'File uploaded'
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.PAPER_TEMPLATE_ID,
      templateParams
    );

    return { success: true, message: 'Paper submitted successfully!' };
  } catch (error) {
    console.error('Error sending paper submission email:', error);
    return { success: false, message: 'Error submitting paper. Please try again.' };
  }
};

// Send Contact Us Email
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      to_email: EMAIL_CONFIG.TO_EMAIL,
      from_email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone_number: formData.phone,
      user_email: formData.email,
      message: formData.message
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams
    );

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, message: 'Error sending message. Please try again.' };
  }
};
