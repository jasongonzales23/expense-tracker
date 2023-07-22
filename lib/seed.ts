import { db, sql } from "@/lib/kysely";

export async function seed() {
  const createTable = await db.schema
    .createTable("expenses")
    .ifNotExists()
    .addColumn("id", "serial", (cb) => cb.primaryKey())
    .addColumn("description", "varchar(255)", (cb) => cb.notNull())
    .addColumn("amount", "integer", (cb) => cb.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();
  console.log(`Created "Expenses" table`);
  const addExpenses = await db
    .insertInto("expenses")
    .values([
      {
        description: "nothing",
        amount: 7,
      },
    ])
    .execute();
  console.log("Seeded database with 3 expenses");
  return {
    createTable,
    addExpenses,
  };
}
