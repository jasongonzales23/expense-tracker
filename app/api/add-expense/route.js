import { db, sql } from "@/lib/kysely";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // insert into DB
  const addExpense = await db.insertInto("expenses").values([data]).execute();
  console.log("inserted Expense record", data);

  return NextResponse.json({ message: "ok" });
}

// export async function GET() {
//   return NextResponse.json({
//     message: "hello",
//   });
// }
