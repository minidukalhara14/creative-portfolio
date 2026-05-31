// src/sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6xwfm015", // ඔයාගේ සැනිටි Project ID එක
  dataset: "production",
  useCdn: true, 
  apiVersion: "2026-05-28", // අද දවස
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);