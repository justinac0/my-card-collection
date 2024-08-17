import { db } from "../db";
import { cards } from "../schema";

export type SelectCard = typeof cards.$inferSelect;
export type InsertCard = typeof cards.$inferInsert;