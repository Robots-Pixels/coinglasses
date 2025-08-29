import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**"), new URL("https://pbs.twimg.com/**")]
  }
};

export default nextConfig;
