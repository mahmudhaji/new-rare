'use server';
/**
 * @fileOverview A Genkit flow for generating personalized Zanzibar or Tanzania adventure itineraries.
 *
 * - generatePersonalizedItinerary - A function that handles the itinerary generation process.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.object({
  interests: z
    .array(z.string())
    .describe(
      'A list of the traveler\'s interests (e.g., "beaches", "wildlife", "culture", "relaxation").'
    ),
  duration: z
    .number()
    .min(1)
    .describe('The desired duration of the trip in days (minimum 1 day).'),
  budget: z
    .enum(['budget-friendly', 'mid-range', 'luxury', 'ultra-luxury'])
    .describe(
      'The traveler\'s preferred budget level ("budget-friendly", "mid-range", "luxury", "ultra-luxury").'
    ),
  desiredActivities: z
    .array(z.string())
    .describe(
      'A list of specific activities the traveler desires (e.g., "snorkeling", "safari game drive", "Stone Town tour").'
    ),
  destination: z
    .enum(['Zanzibar', 'Tanzania', 'Both'])
    .describe('The desired travel destination ("Zanzibar", "Tanzania", or "Both").')
    .default('Zanzibar'),
});
export type GeneratePersonalizedItineraryInput = z.infer<
  typeof GeneratePersonalizedItineraryInputSchema
>;

const ItineraryDaySchema = z.object({
  day: z.number().describe('The day number of the itinerary.'),
  activities: z
    .array(z.string())
    .describe('A list of activities planned for this day.'),
  accommodations: z
    .string()
    .optional()
    .describe('Recommended accommodation for this day, if applicable.'),
});

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itineraryTitle: z
    .string()
    .describe('A descriptive title for the personalized itinerary.'),
  description: z
    .string()
    .describe('A brief overview and introduction to the itinerary.'),
  dailyPlan: z
    .array(ItineraryDaySchema)
    .describe('A day-by-day breakdown of the itinerary.'),
  estimatedCostRange: z
    .string()
    .optional()
    .describe(
      'An estimated cost range for the itinerary based on the chosen budget, e.g., "$2000 - $3500 per person".'
    ),
  recommendations: z
    .array(z.string())
    .optional()
    .describe(
      'Additional recommendations or tips related to the trip, e.g., "Best time to visit is July-September for wildlife viewing.".'
    ),
});
export type GeneratePersonalizedItineraryOutput = z.infer<
  typeof GeneratePersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  return generatePersonalizedItineraryFlow(input);
}

const generateItineraryPrompt = ai.definePrompt({
  name: 'generateItineraryPrompt',
  input: {schema: GeneratePersonalizedItineraryInputSchema},
  output: {schema: GeneratePersonalizedItineraryOutputSchema},
  prompt: `You are a luxury travel concierge specializing in crafting bespoke adventure itineraries for Zanzibar and Tanzania.

Based on the traveler's preferences, generate a personalized multi-day itinerary. Ensure the itinerary is luxurious, adventure-focused, and highlights the unique offerings of {{destination}}.

Traveler Preferences:
Interests: {{#each interests}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Duration: {{{duration}}} days
Budget: {{{budget}}}
Desired Activities: {{#each desiredActivities}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Destination: {{{destination}}}

Craft a compelling itinerary that matches these preferences. For each day, provide a clear list of activities and suggest a suitable accommodation style or specific example. Include an estimated cost range if possible, considering the budget level, and any relevant recommendations.`,
});

const generatePersonalizedItineraryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItineraryFlow',
    inputSchema: GeneratePersonalizedItineraryInputSchema,
    outputSchema: GeneratePersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await generateItineraryPrompt(input);
    if (!output) {
      throw new Error('Failed to generate itinerary. Output was undefined.');
    }
    return output;
  }
);
