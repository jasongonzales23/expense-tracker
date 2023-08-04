"use client";

interface TotalIx {
  total: number | undefined;
}
export default function Total({ total }: TotalIx) {
  return <h2 className="text-3xl">Total: {total || "Loading..."}</h2>;
}
