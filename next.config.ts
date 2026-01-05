import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ju.edu.jo",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
