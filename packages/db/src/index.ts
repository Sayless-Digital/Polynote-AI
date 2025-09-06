import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';
import { resolve } from 'path';
import * as schema from './schema';

// Load environment variables from the root .env.local file
config({ path: resolve(__dirname, '../../../.env.local') });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

export * from './schema';
