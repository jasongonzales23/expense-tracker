"use client";
import { Metric, Card, Text } from "@tremor/react";

interface TotalIx {
  total: number | undefined;
  className: string;
}
export default function Total({ total, className }: TotalIx) {
  return (
    <Card className={className} decoration="top" decorationColor="green">
      <Text>Total</Text>
      {total ? <Metric>{`$${total}`}</Metric> : <Metric>...Loading</Metric>}
    </Card>
  );
}
