import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  serverExternalPackages: [
    '@neondatabase/serverless', 
    'ai', 
    '@ai-sdk/google', 
    '@ai-sdk/openai', 
    '@ai-sdk/anthropic', 
    '@ai-sdk/gateway',
    '@ai-sdk/react',
    'dotenv',
    'bcryptjs',
    'pdf-parse',
    'mammoth'
  ],
  // Optimize for production
  compress: true,
};

export default nextConfig;
