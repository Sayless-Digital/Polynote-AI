import { defineConfig } from 'drizzle-kit';
import { resolve } from 'path';

// Safely load environment variables only if not already loaded
if (typeof process !== 'undefined' && !process.env.DATABASE_URL) {
  try {
    // Only import and configure dotenv if we're in a Node.js environment
    // and DATABASE_URL is not already set
    const { config } = require('dotenv');
    config({ path: resolve(__dirname, '../../.env.local') });
  } catch (error) {
    console.warn('Could not load .env.local file:', error);
  }
}

export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
