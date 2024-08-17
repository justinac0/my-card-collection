import { db, connection } from "./db";
import { migrate } from "drizzle-orm/mysql2/migrator";

const migrate_db = async () => {
    if (db) {
        await migrate(db, {migrationsFolder: './drizzle-migrations'});
        await connection.end();
    }
}

migrate_db();