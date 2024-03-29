import { db } from "@/lib/kysely";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // insert into DB
  await db.insertInto("expenses").values([data]).execute();
  console.log("inserted Expense record", data);

  return NextResponse.json({ message: "ok" });
}
