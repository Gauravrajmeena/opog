import { generateObject } from "ai";
import { z } from "zod";

import { geminiFlashModel } from ".";

export async function generateSampleFlightStatus({
  flightNumber,
  date,
}: {
  flightNumber: string;
  date: string;
}) {
  const { object: flightStatus } = await generateObject({
    model: geminiFlashModel,
    prompt: `Flight status for flight number ${flightNumber} on ${date}`,
    schema: z.object({
      flightNumber: z.string(),
      departure: z.object({
        cityName: z.string(),
        airportCode: z.string(),
        timestamp: z.string(),
        terminal: z.string(),
        gate: z.string(),
      }),
      arrival: z.object({
        cityName: z.string(),
        airportCode: z.string(),
        timestamp: z.string(),
        terminal: z.string(),
        gate: z.string(),
      }),
      totalDistanceInMiles: z.number(),
    }),
  });

  return flightStatus;
}

// Add other Gemini actions like generateSampleFlightSearchResults, generateSampleSeatSelection, etc. 