"use client";
import { Metric, Card, Text } from "@tremor/react";

interface TotalIx {
  total: number | undefined;
  className: string;
}
const BUDGET = 3300;
export default function Total({ total, className }: TotalIx) {
  const remaining = total ? BUDGET - total : total;
  return (
    <Card className={className} decoration="top" decorationColor="green">
      <Text>Remaining Budget</Text>
      {total ? <Metric>{`$${remaining}`}</Metric> : <Metric>...Loading</Metric>}
    </Card>
  );
}
