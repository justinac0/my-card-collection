import { defineConfig } from 'drizzle-kit';
import "dotenv";

export const dbCredentials = {
      host: process.env['DB_HOST'] || "no host",
      user: process.env['DB_USER'] || "no user",
      password: process.env['DB_PASSWORD'] || "no password",
      database: process.env['DB_NAME'] || "no name",
      port: 3306,
};

export default defineConfig({
    dialect: 'mysql',
    schema: './src/app/lib/db/schema.ts',
    out: './drizzle',
    dbCredentials: dbCredentials, 
});