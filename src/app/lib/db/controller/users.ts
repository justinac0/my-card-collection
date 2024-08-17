import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../schema";

export type SelectUser = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const insertUser = (user: NewUser) => {
    return db?.insert(users).values(user).$returningId();
}

export const removeUser = (user: SelectUser) => {
    return db?.delete(users).where(eq(users.email, user.email));
}

export const getAllUsers = () => {
    return db?.select().from(users);
}

export const updateUser = (user: SelectUser) => {
    return db?.update(users).set(user).where(eq(users.email, user.email));
}

export const getUserByID = (user: SelectUser) => {
    return db?.select().from(users).where(eq(users.id, user.id));
}

export const getUserByEmail = (user: SelectUser) => {
    return db?.select().from(users).where(eq(users.email, user.email));
}