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
    
    // LOGIC: Email to Admin (Mahmud)
    console.log(`--- SENDING EMAIL TO ADMIN ---`);
    console.log(`To: ${ADMIN_EMAIL}`);
    console.log(`Subject: 🚨 New Booking Inquiry: ${formData.tour}`);
    console.log(`Body: 
      Customer Name: ${formData.name}
      Customer Email: ${formData.email}
      Interested In: ${formData.tour}
      Message: ${formData.message}
    `);

    // LOGIC: Email to Customer (The traveler)
    console.log(`--- SENDING CONFIRMATION TO CUSTOMER ---`);
    console.log(`To: ${formData.email}`);
    console.log(`Subject: Your Rare Zanzibar Adventure - Booking Received!`);
    console.log(`Body: 
      Jambo ${formData.name}!
      
      Thank you for choosing Rare Zanzibar Adventure. We have received your inquiry for the "${formData.tour}". 
      
      Our specialist team is currently reviewing your request and will get back to you within 24 hours via email or WhatsApp to finalize your luxury itinerary.
      
      Trip Details:
      - Adventure: ${formData.tour}
      - Status: Pending Review
      
      We look forward to showing you the magic of Zanzibar and Tanzania!
      
      Best regards,
      The Rare Zanzibar Team
      Paje, Zanzibar
    `);

    // Simulate network latency for a real email service
    await new Promise(resolve => setTimeout(resolve, 1500));

    return { success: true };
  } catch (error) {
    console.error("Error in handleContactSubmission:", error);
    throw new Error("Failed to process booking submission");
  }
}
