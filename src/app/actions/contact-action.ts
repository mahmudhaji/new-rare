
'use server';

/**
 * Handles the contact form submission.
 * Simulates sending an email to the admin and a confirmation email to the customer.
 */
export async function handleContactSubmission(formData: {
  name: string;
  email: string;
  tour: string;
  message: string;
}) {
  try {
    const ADMIN_EMAIL = 'mahmudhaji2010@gmail.com';
    
    // LOGIC: Email to Admin
    console.log(`[OUTGOING EMAIL TO ADMIN: ${ADMIN_EMAIL}]`);
    console.log(`Subject: New Booking Inquiry from ${formData.name}`);
    console.log(`Content: Customer interested in ${formData.tour}. Message: ${formData.message}`);

    // LOGIC: Email to Customer
    console.log(`[OUTGOING EMAIL TO CUSTOMER: ${formData.email}]`);
    console.log(`Subject: Your Rare Zanzibar Adventure Booking`);
    console.log(`Content: Hi ${formData.name}, thank you for your interest in ${formData.tour}. We've received your request and our team will get back to you shortly!`);

    // Simulate network latency for a real email service
    await new Promise(resolve => setTimeout(resolve, 1500));

    return { success: true };
  } catch (error) {
    console.error("Error in handleContactSubmission:", error);
    throw new Error("Failed to process booking submission");
  }
}
