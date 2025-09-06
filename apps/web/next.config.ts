import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  serverExternalPackages: ['@neondatabase/serverless'],
  // Optimize for production
  compress: true,
};

export default nextConfig;
