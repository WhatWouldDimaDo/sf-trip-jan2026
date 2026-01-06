import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'publicsf.com' },
      { protocol: 'https', hostname: '1015.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
      { protocol: 'https', hostname: 'hirespace.com' },
      { protocol: 'https', hostname: 'snipstock.com' },
    ],
  },
};

export default nextConfig;
