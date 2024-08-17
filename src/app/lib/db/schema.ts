import { mysqlTable, varchar, serial } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
    id: serial('id').primaryKey(),
    firstname: varchar('firstname', {length: 64}).notNull(),
    lastname: varchar('lastname', {length: 64}).notNull(),
    email: varchar('email', {length: 64}).notNull().unique(),
    // passwordHash: varchar('passwordHash', {length: 256}).notNull(),
});

export const cards = mysqlTable('cards', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 64}).notNull(),
});