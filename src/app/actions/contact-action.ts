'use server';

/**
 * Handles the contact form submission.
 * Sends a simulated notification to Mahmud and a confirmation to the customer.
 */
export async function handleContactSubmission(formData: {
  name: string;
  email: string;
  tour: string;
  message: string;
}) {
  try {
    // Hardcoded Admin Email as requested
    const ADMIN_EMAIL = 'mahmudhaji2010@gmail.com';
    
    // 1. LOGIC: Simulated Email to Admin (Mahmud)
    console.log(`--- INCOMING BOOKING REQUEST ---`);
    console.log(`To: ${ADMIN_EMAIL}`);
    console.log(`Subject: 🚨 NEW BOOKING from Rare Zanzibar: ${formData.tour}`);
    console.log(`Body: 
      Full Name: ${formData.name}
      Customer Email: ${formData.email}
      Adventure Choice: ${formData.tour}
      Message: ${formData.message}
      ---
      Please reply to the customer via WhatsApp or Email within 24 hours.
    `);

    // 2. LOGIC: Simulated Confirmation to Customer
    console.log(`--- CUSTOMER CONFIRMATION SENT ---`);
    console.log(`To: ${formData.email}`);
    console.log(`Subject: Booking Confirmed: Your Adventure with Rare Zanzibar!`);
    console.log(`Body: 
      Jambo ${formData.name}!
      
      Thank you for your interest in the "${formData.tour}". We have received your booking request through our website.
      
      Mahmud and the team are currently reviewing your request. We will contact you shortly via email or WhatsApp (+255 778 666 810) to finalize your luxury itinerary.
      
      Next Steps:
      - Expect a message from us within 24 hours.
      - Keep an eye on your WhatsApp.
      
      We can't wait to show you the magic of Zanzibar!
      
      Warm regards,
      The Rare Zanzibar Team
      Paje, Zanzibar
    `);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return { success: true };
  } catch (error) {
    console.error("Error processing submission:", error);
    throw new Error("Failed to process booking request");
  }
}
