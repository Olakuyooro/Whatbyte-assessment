"use client";

import { PieChart, Pie, Cell } from "recharts";

interface DonutChartProps {
  correct: number;
  total: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ correct, total }) => {
  const scorePercentage = (correct / total) * 100;

  const data = [
    { name: "Correct", value: scorePercentage },
    { name: "Remaining", value: 100 - scorePercentage },
  ];
  const COLORS = ["#4285F4", "#E0E0E0"];

  return (
    <div className="flex flex-col border border-gray-100 shadow-sm rounded-md items-center p-4">
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-md">Question Analysis</h2>
        <p className="text-sm text-blue-700">{`${correct}/${total}`}</p>
      </div>
      <p className="text-sm font-medium mt-2">
        You scored <strong>{correct} question correct</strong> out of {total}.
        {scorePercentage < 100
          ? " However, it still needs some improvements."
          : " Excellent job!"}
      </p>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <foreignObject x="40%" y="40%" width="40" height="40">
          <div className="flex justify-center items-center w-full h-full text-lg">
            🎯
          </div>
        </foreignObject>
      </PieChart>
    </div>
  );
};

export default DonutChart;
