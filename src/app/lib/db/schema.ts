import { mysqlTable, varchar, serial, int, text } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

export const users = mysqlTable('users', {
    id: serial('id').primaryKey(),
    firstname: varchar('firstname', {length: 64}).notNull(),
    lastname: varchar('lastname', {length: 64}).notNull(),
    email: varchar('email', {length: 64}).notNull().unique(),
    passwordHash: varchar('passwordHash', {length: 256}).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
    cards: many(cards),
}));

export const cards = mysqlTable('cards', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 64}).notNull(),
    description: text('description'),
    count: int('count'),
    owner_id: int('owner_id')
});

export const cardsRelations = relations(cards, ({ one }) => ({
    id: one(users, {
        fields: [cards.owner_id],
        references: [users.id]
    }),
}));
