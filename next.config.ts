import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow real product photos to be dropped in via the `image` field on
    // products (see src/lib/products.ts). Add your own hosts here as needed.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
