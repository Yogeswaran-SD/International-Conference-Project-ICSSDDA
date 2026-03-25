# EmailJS Setup Guide

This guide explains how to set up EmailJS for sending emails from your forms.

## Steps to Configure EmailJS

### 1. Create an EmailJS Account
- Visit https://www.emailjs.com/
- Sign up for a free account
- Verify your email address

### 2. Get Your Public Key
- Go to https://dashboard.emailjs.com/admin/account
- Copy your **Public Key** (under "API Keys")
- Open `src/services/emailService.js`
- Replace `'YOUR_PUBLIC_KEY'` with your actual public key

### 3. Create an Email Service
- Go to https://dashboard.emailjs.com/admin/services
- Click "Create New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email account
- Copy your **Service ID**
- Open `src/services/emailService.js`
- Replace `'YOUR_SERVICE_ID'` with your Service ID

### 4. Create Email Templates

#### For Paper Submission Form:
- Go to https://dashboard.emailjs.com/admin/templates
- Click "Create New Template"
- Name it (e.g., "Paper_Submission")
- Set the email details:
  - **To Email**: `{{to_email}}`
  - **From Name**: `Conference Paper Submission`
  - **Subject**: `New Paper Submission - {{paper_title}}`
  - **HTML Body**:
    ```
    <h2>Paper Submission Received</h2>
    <p>Thank you for submitting your paper!</p>
    <p><strong>Paper Title:</strong> {{paper_title}}</p>
    <p><strong>Institution:</strong> {{institution_name}}</p>
    <p><strong>Author:</strong> {{author_name}}</p>
    <p><strong>Email:</strong> {{author_email}}</p>
    <p><strong>Category:</strong> {{paper_category}}</p>
    <p><strong>File:</strong> {{file_name}}</p>
    <p>We will review your submission and get back to you shortly.</p>
    ```
- Copy the **Template ID**
- Open `src/services/emailService.js`
- Replace `'YOUR_PAPER_TEMPLATE_ID'` with this Template ID

#### For Contact Us Form:
- Click "Create New Template" again
- Name it (e.g., "Contact_Us")
- Set the email details:
  - **To Email**: `{{to_email}}`
  - **From Name**: `Conference Contact Form`
  - **Subject**: `New Contact Message from {{first_name}} {{last_name}}`
  - **HTML Body**:
    ```
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> {{first_name}} {{last_name}}</p>
    <p><strong>Email:</strong> {{user_email}}</p>
    <p><strong>Phone:</strong> {{phone_number}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    ```
- Copy the **Template ID**
- Open `src/services/emailService.js`
- Replace `'YOUR_CONTACT_TEMPLATE_ID'` with this Template ID

### 5. Update emailService.js

Your `emailService.js` file should look like this after configuration:

```javascript
emailjs.init('pk_YOUR_PUBLIC_KEY_HERE');

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_YOUR_SERVICE_ID',
  PAPER_TEMPLATE_ID: 'template_YOUR_PAPER_TEMPLATE_ID',
  CONTACT_TEMPLATE_ID: 'template_YOUR_CONTACT_TEMPLATE_ID',
  TO_EMAIL: 'yogeswaran.cse@gmail.com'
};
```

### 6. Test the Forms
- Fill out the paper submission or contact form
- Click Submit
- Check your email (yogeswaran.cse@gmail.com) to verify emails are being received

## Troubleshooting

- **Emails not sending**: Check that all IDs are correctly copied
- **Template variables not showing**: Ensure variable names in the template match exactly (case-sensitive)
- **Free tier limitations**: EmailJS free tier allows 200 emails/month
- **Check error console**: Open browser DevTools (F12) → Console to see any error messages

## Notes

- The file upload (paper PDF) cannot be sent directly via email using this method. You may want to implement additional backend services (like Firebase Storage) for file handling
- All submissions will be sent to yogeswaran.cse@gmail.com
- Consider adding rate limiting if you expect high traffic
