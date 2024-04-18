import "dotenv/config";
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./db";

async function runMigrations() {
  try {
    console.log("Running migrations...");
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("Migrations completed!");
    process.exit(0);
  } catch (err) {
    console.log("Migrations failed!");
    process.exit(1);
  }
}

runMigrations();
