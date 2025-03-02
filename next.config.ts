import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // Important for AWS Amplify
  images: {
    unoptimized: true, // Required since Amplify does not support Next.js Image Optimization
  },
};

export default nextConfig;
