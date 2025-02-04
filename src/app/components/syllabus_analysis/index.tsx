"use client";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
}

const ProgressBar = ({ label, value, color }: ProgressBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold">{label}</span>
        <span className={`text-sm font-semibold`} style={{ color }}>
          {value}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default function SyllabusAnalysis() {
  const data = [
    { label: "HTML Tools, Forms, History", value: 80, color: "#3b82f6" },
    { label: "Tags & References in HTML", value: 60, color: "#f97316" },
    { label: "Tables & References in HTML", value: 24, color: "#ef4444" },
    { label: "Tables & CSS Basics", value: 96, color: "#10b981" },
  ];

  return (
    <div className="p-6 rounded-md shadow-md h-[25rem]">
      <h3 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h3>
      <div className="space-y-12">
        {data.map((item, index) => (
          <ProgressBar key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
