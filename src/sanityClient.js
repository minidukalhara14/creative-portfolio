// src/sanityClient.js
import { createClient } from "@sanity/client";
import {createImageUrlBuilder} from "@sanity/image-url";

export const client = createClient({
  projectId: "6xwfm015", // ඔයාගේ සැනිටි Project ID එක
  dataset: "production",
  useCdn: true, 
  apiVersion: "2026-05-28", // අද දවස
});

const builder = createImageUrlBuilder(client);

// Safe URL builder that handles incomplete/missing image assets
export const urlFor = (source) => {
  // Check if source exists and has required asset field
  if (!source || !source.asset) {
    console.warn("Invalid image source:", source);
    return {
      url: () => null, // Return null URL for invalid images
    };
  }
  return builder.image(source);
};