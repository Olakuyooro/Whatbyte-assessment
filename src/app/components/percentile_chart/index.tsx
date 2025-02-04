/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

type PercentileChartProps = {
  percentile: number;
};

const percentileData = [
  { name: 0, value: 2, numberOfStudents: 1 },
  { name: 10, value: 5, numberOfStudents: 3 },
  { name: 20, value: 20, numberOfStudents: 8 },
  { name: 30, value: 40, numberOfStudents: 12 },
  { name: 40, value: 60, numberOfStudents: 20 },
  { name: 50, value: 80, numberOfStudents: 30 },
  { name: 60, value: 50, numberOfStudents: 15 },
  { name: 70, value: 30, numberOfStudents: 10 },
  { name: 80, value: 20, numberOfStudents: 6 },
  { name: 90, value: 10, numberOfStudents: 4 },
  { name: 100, value: 2, numberOfStudents: 2 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow-md">
        <p className="text-black font-semibold">{data.name}</p>
        <p className="text-blue-500">
          Number of students: {data.numberOfStudents}
        </p>
      </div>
    );
  }
  return null;
};

export function PercentileChart({ percentile }: PercentileChartProps) {
  return (
    <div className="w-[98%] md:w-[90%] rounded-sm border border-gray-100 p-4 shadow-sm flex flex-col">
      <h3 className="mb-2 font-semibold">Comparison Graph</h3>
      <div className="flex justify-between mb-3">
        <p className="text-sm text-gray-600 w-[30rem]">
          <strong className="text-black">
            You scored {percentile}% percentile
          </strong>
          , which is lower than the <br></br> average percentile <strong>72%</strong> of
          all engineers who took this assessment.
        </p>
        <div>📈</div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={percentileData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              position: "insideBottom",
              offset: -5,
            }}
            type="number"
            domain={[0, 100]}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <ReferenceLine
            x={percentile}
            stroke="gray"
            strokeDasharray="5 5"
            label={{
              value: "your percentile",
              position: "top",
              fill: "gray",
              fontSize: 12,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
