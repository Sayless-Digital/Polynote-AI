import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    serverComponentsExternalPackages: ['@neondatabase/serverless'],
  },
  // Enable faster builds and better performance
  swcMinify: true,
  // Optimize for production
  compress: true,
};

export default nextConfig;
