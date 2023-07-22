import { db } from "@/lib/kysely";
import { seed } from "@/lib/seed";

export default async function Total() {
  let expenses;
  let startTime = Date.now();

  try {
    expenses = await db.selectFrom("expenses").selectAll().execute();
  } catch (e: any) {
    if (e.message === `relation "expenses" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      startTime = Date.now();
      expenses = await db.selectFrom("expenses").selectAll().execute();
    } else {
      throw e;
    }
  }

  const single = expenses[0].amount;
  return <h2>Total: {single}</h2>;
}
