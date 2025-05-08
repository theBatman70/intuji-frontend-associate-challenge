interface ChartProps {
  colors: { label1: string; label2: string };
}

interface Label {
  dataKey: string;
  labelName: string;
  color: string;
}

export type { ChartProps, Label };
