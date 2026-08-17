import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shelnovalabs.com",
      },
      {
        protocol: "https",
        hostname: "jiranify.com",
      },
    ],
  },
};

export default nextConfig;
