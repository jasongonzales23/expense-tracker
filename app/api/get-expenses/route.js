import { db } from "@/lib/kysely";
import { seed } from "@/lib/seed";
import { NextResponse } from "next/server";

export async function GET(request) {
  let expenses;
  // TODO FML there's a timezone issue and
  // some results are incorrectly being filtered
  const today = new Date();
  const firstday = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastday = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  try {
    expenses = await db
      .selectFrom("expenses")
      //   .where("createdAt", ">=", firstday)
      //   .where("createdAt", "<=", lastday)
      .selectAll()
      .execute();
  } catch (e) {
    if (e.message === `relation "expenses" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      expenses = await db.selectFrom("expenses").selectAll().execute();
    } else {
      throw e;
    }
  }

  return NextResponse.json(expenses);
}
