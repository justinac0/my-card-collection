import { drizzle } from "drizzle-orm/mysql2";
import { dbCredentials } from "../../../../drizzle.config";
import mysql from "mysql2/promise";

import "dotenv";

/** Database connection pool for drizzle-orm. */
export const connection = mysql.createPool(dbCredentials);

const init_db = () => {
    try {
        let db = drizzle(connection);
        console.log('Database Connection was Successful!');
        return db;
    } catch(error) {
        console.error('Database Error: ', error);
    }

    return undefined;
}

/** Database instance for handling database calls. */
export const db = init_db();