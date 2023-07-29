"use client";

interface TotalIx {
  total: number;
}
export default function Total({ total }: TotalIx) {
  return <h2>Total: {total}</h2>;
}
