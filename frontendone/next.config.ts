import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [];
  },
  env: {
    PORT: '3000'
  },
  // your existing config options
};

export default nextConfig;