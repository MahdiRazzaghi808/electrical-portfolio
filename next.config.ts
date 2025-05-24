import type { NextConfig } from 'next/dist/server/config';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'media.istockphoto.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
