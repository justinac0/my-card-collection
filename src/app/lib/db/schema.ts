import { mysqlTable, varchar, serial, int, bigint, text, primaryKey, customType } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

// https://github.com/drizzle-team/drizzle-orm/issues/258 - @mymatsubara
const unsignedBigint = customType<{ data: number }>({
    dataType() {
        return "bigint UNSIGNED";
    }
});

export const users = mysqlTable('users', {
    id: serial('id').primaryKey(),
    firstname: varchar('firstname', {length: 64}).notNull(),
    lastname: varchar('lastname', {length: 64}).notNull(),
    email: varchar('email', {length: 64}).notNull().unique(),
    passwordHash: varchar('passwordHash', {length: 256}).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
    userCards: many(userCards),
}));

export const cards = mysqlTable('cards', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 64}).notNull(),
    description: text('description').notNull(),
    count: int('count').notNull(),
});

export const cardsRelations = relations(cards, ({ many }) => ({
    userCards: many(userCards),
}));

export const userCards = mysqlTable('user_cards', {
    userId: unsignedBigint('user_id').notNull().references(() => users.id),
    cardId: unsignedBigint('card_id').notNull().references(() => cards.id),
},
    (t) => ({
        pk: primaryKey({columns: [t.userId, t.cardId]}),
    }),
);

export const userCardsRelations = relations(userCards, ({ one }) => ({
    user: one(users, {
        fields: [userCards.userId],
        references: [users.id],
    }),
    card: one(cards, {
        fields: [userCards.cardId],
        references: [cards.id]
    })
}));