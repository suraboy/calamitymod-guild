import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calamitymod.wiki.gg',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
