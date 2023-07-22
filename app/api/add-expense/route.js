import { NextResponse } from "next/server";

export async function POST(request) {
  const data = request.json();
  // insert into DB

  const parsed = JSON.stringify(data);
  console.log(parsed);
  return NextResponse.json({ message: "ok" });
}

// export async function GET() {
//   return NextResponse.json({
//     message: "hello",
//   });
// }
