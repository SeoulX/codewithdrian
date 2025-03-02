import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensures images work correctly on AWS Amplify
  },
};

export default nextConfig;
