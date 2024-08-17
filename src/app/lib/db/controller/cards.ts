import { eq } from "drizzle-orm";

import { db } from "../db";
import { cards } from "../schema";

export type ExistingCard = typeof cards.$inferSelect;
export type NewCard = typeof cards.$inferInsert;

export const insertCard = (card: NewCard) => {
    return db?.insert(cards).values(card).$returningId();
}

export const removeCard = (card: ExistingCard) => {
    return db?.delete(cards).where(eq(cards.id, card.id));
}

export const getAllCards = () => {
    return db?.select().from(cards);
}

export const updateCard = (card: ExistingCard) => {
    return db?.update(cards).set(card).where(eq(cards.id, card.id));
}

export const getCardByID = (card: ExistingCard) => {
    return db?.select().from(cards).where(eq(cards.id, card.id));
}
