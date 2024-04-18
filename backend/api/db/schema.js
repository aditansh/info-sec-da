import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    username: text("username").notNull(),
    password: text("password").notNull(),
    email: text("email"),
    phone: text("phone"),
    role: text("role").notNull().default("user"),
    createdAt: integer("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: integer("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (users) => ({
    nameIdx: uniqueIndex("id_idx").on(users.id),
  })
);

export const movies = sqliteTable(
  "movies",
  {
    id: integer("id").primaryKey(),
    title: text("title").notNull(),
    year: integer("year"),
    director: text("director"),
    genre: text("genre"),
    createdAt: integer("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: integer("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (movies) => ({
    titleIdx: uniqueIndex("title_idx").on(movies.title),
  })
);
