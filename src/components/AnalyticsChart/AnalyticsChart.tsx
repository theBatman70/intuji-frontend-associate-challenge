import styles from "../../features/Analytics/Analytics.module.scss";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { chartData } from "../../data/chart";
import { Label } from "../../@types/chart";

const AnalyticsChart = ({ dataLabels }: { dataLabels: Label[] }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={304}
      className={styles.analyticsContainer}
    >
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
      >
        <defs>
          {dataLabels.map((label: Label) => (
            <linearGradient
              id={"color" + label.dataKey}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={label.color} stopOpacity={0.2} />
              <stop offset="95%" stopColor={label.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid
          strokeDasharray="20 7"
          vertical={false}
          horizontal={true}
          stroke="#ebebeb"
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#999999", fontSize: 12 }}
          tickMargin={10}
        />
        <YAxis
          tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
          ticks={[0, 1000, 5000, 10000, 15000, 20000]}
          domain={[0, 20000]}
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#999999", fontSize: 12 }}
          width={50}
          tickMargin={8}
        />
        {dataLabels.map((label: Label) => (
          <Area
            type="monotone"
            dataKey={label.dataKey}
            stroke={label.color}
            strokeWidth={2}
            fillOpacity={1}
            key={label.labelName}
            fill={"url(#color" + label.dataKey + ")"}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
