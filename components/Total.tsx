"use client";

interface TotalIx {
  total: number | undefined;
}
export default function Total({ total }: TotalIx) {
  return <h2>Total: {total || "Loading..."}</h2>;
}
