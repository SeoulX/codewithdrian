import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  output: "standalone", // Important for AWS Amplify
  images: {
    unoptimized: true, // Required since Amplify does not support Next.js Image Optimization
  },
};

export default nextConfig;
