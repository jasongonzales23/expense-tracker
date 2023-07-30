import { db } from "@/lib/kysely";
import { seed } from "@/lib/seed";
import { NextResponse } from "next/server";

export async function GET(request) {
  let expenses;
  let startTime = Date.now();

  try {
    expenses = await db.selectFrom("expenses").selectAll().execute();
  } catch (e) {
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

  return NextResponse.json(expenses);
}
