/**
 * Handles the contact form submission for static export.
 * Since this is a static build, we simulate the email process.
 */
export async function handleContactSubmission(formData: {
  name: string;
  email: string;
  tour: string;
  message: string;
}) {
  try {
    // In a static export, we can't run server-side code.
    // We simulate the success response here.
    console.log("Static Export: Simulated email triggered for", formData.email);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Error processing submission:", error);
    return { success: false };
  }
}
