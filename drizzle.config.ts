import { defineConfig } from 'drizzle-kit';
import "dotenv";

export const dbCredentials = {
      host: process.env['DBHOST'] || "no host",
      user: process.env['DBUSER'] || "no user",
      password: process.env['DBPASS'] || "no password",
      database: process.env['DBNAME'] || "no name",
      port: 3306,
};

export default defineConfig({
    dialect: 'mysql',
    schema: './src/app/lib/db/schema.ts',
    out: './drizzle',
    dbCredentials: dbCredentials, 
});
