import "dotenv/config";

export default {
  schema: "./api/db/schema.js",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
};
