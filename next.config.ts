import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prod.spline.design",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
