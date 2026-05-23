/**
 * @fileOverview A Genkit flow for generating personalized Zanzibar or Tanzania adventure itineraries.
 *
 * This file is disabled for static export as it requires a server environment.
 */

import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.object({
  interests: z.array(z.string()),
  duration: z.number().min(1),
  budget: z.enum(['budget-friendly', 'mid-range', 'luxury', 'ultra-luxury']),
  desiredActivities: z.array(z.string()),
  destination: z.enum(['Zanzibar', 'Tanzania', 'Both']).default('Zanzibar'),
});
export type GeneratePersonalizedItineraryInput = z.infer<typeof GeneratePersonalizedItineraryInputSchema>;

export type GeneratePersonalizedItineraryOutput = {
  itineraryTitle: string;
  description: string;
  dailyPlan: Array<{ day: number; activities: string[]; accommodations?: string }>;
  estimatedCostRange?: string;
  recommendations?: string[];
};

export async function generatePersonalizedItinerary(
  input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  // Simulated output for static compatibility
  return {
    itineraryTitle: "Your Zanzibar Escape",
    description: "A tailored journey through paradise.",
    dailyPlan: [
      { day: 1, activities: ["Arrival at Stone Town", "Exploring the spice markets"], accommodations: "Boutique Stone Town Hotel" }
    ]
  };
}
