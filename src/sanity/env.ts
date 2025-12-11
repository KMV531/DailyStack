export const apiVersion = "2025-12-04";

export const dataset = assertValue("production");

export const projectId = assertValue("8guvawcc");

export const token = assertValue(
  "skUvyhj6krwbBKNDfsPJEi60Z4c8UhWRjptLIFY5TpvqggVu2T6d8Vg87kXuQVOe7BL2vfT8oFoEJBHr8c5vNq7TBooDMgLMyunhGNqDlk9PvoIcMQ3wRvi8KdBdtkBlt3T3pC1YU760ljFVdIfoiArJ9Nc8rZH44wwpL5YRPpckdtASrF6j"
);

function assertValue<T>(v: T | undefined): T {
  if (v === undefined) {
    throw new Error("Missing environment variable");
  }

  return v;
}

/*
export const projectId = "8guvawcc";
export const dataset = "production";
export const apiVersion = "2025-12-04";
export const token =
  "skUvyhj6krwbBKNDfsPJEi60Z4c8UhWRjptLIFY5TpvqggVu2T6d8Vg87kXuQVOe7BL2vfT8oFoEJBHr8c5vNq7TBooDMgLMyunhGNqDlk9PvoIcMQ3wRvi8KdBdtkBlt3T3pC1YU760ljFVdIfoiArJ9Nc8rZH44wwpL5YRPpckdtASrF6j";
// export const sanityToken = "votre_token_sanity";
*/
/* 
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-12-04";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
*/
