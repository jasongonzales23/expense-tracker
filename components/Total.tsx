"use client";
import { Metric, Card, Text } from "@tremor/react";

interface TotalIx {
  total: number | undefined;
  className: string;
}
export default function Total({ total, className }: TotalIx) {
  const remaining = total ? 3300 - total : total;
  return (
    <Card className={className} decoration="top" decorationColor="green">
      <Text>Remaining Budget</Text>
      {total ? <Metric>{`$${remaining}`}</Metric> : <Metric>...Loading</Metric>}
    </Card>
  );
}
