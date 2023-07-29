import { db } from "@/lib/kysely";
import { seed } from "@/lib/seed";
import { NextResponse } from "next/server";

export default async function Get() {
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

  return NextResponse.json({ message: "what up?" });
  //   return NextResponse.json(expenses);
}
