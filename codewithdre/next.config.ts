import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for Amplify
  },
  trailingSlash: true, // Helps with routing issues
};

export default nextConfig;
