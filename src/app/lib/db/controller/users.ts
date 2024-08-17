import { eq } from "drizzle-orm";

import { db } from "../db";
import { users } from "../schema";

export type ExistingUser = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const insertUser = (user: NewUser) => {
    return db?.insert(users).values(user).$returningId();
}

export const removeUser = (user: ExistingUser) => {
    return db?.delete(users).where(eq(users.email, user.email));
}

export const getAllUsers = () => {
    return db?.select().from(users);
}

export const updateUser = (user: ExistingUser) => {
    return db?.update(users).set(user).where(eq(users.email, user.email));
}

export const getUserByID = (user: ExistingUser) => {
    return db?.select().from(users).where(eq(users.id, user.id));
}

export const getUserByEmail = (user: ExistingUser) => {
    return db?.select().from(users).where(eq(users.email, user.email));
}