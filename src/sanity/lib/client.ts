import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env.ts";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    studioUrl:
      process.env.NODE_ENV === "production"
        ? "https://daily-stack-sigma.vercel.app"
        : `${process.env.NEXT_PUBLIC_BASE_URL_KEY}/studio`,
  },
});

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
});
