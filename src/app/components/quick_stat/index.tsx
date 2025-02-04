import React from "react";

type QuickStatProps = {
  rank: string;
  percentile: string;
  score: string;
};

export default function QuickStat({ rank, percentile, score }: QuickStatProps) {
  return (
    <section className="border border-gray-100 rounded-md p-6 w-[98%] md:w-[90%] shadow-sm">
      <h3 className="mb-4 font-semibold">Quick Statistics</h3>
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 space-x-0">
        <div className="flex space-x-3">
          <p className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
            🏆
          </p>
          <div className="space-y-1">
            <h2 className="font-semibold">{rank}</h2>
            <p className="text-xs">YOUR RANK</p>
          </div>
        </div>
        <hr className="w-16 mt-5 rotate-90 hidden md:block"></hr>
        <div className="flex space-x-3">
          <p className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
            📋
          </p>
          <div className="space-y-1">
            <h2 className="font-semibold">{percentile}%</h2>
            <p className="text-xs">PERCENTILE</p>
          </div>
        </div>
        <hr className="w-16 mt-5 rotate-90 hidden md:block"></hr>
        <div className="flex space-x-3">
          <p className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
            ✅
          </p>
          <div className="space-y-1">
            <h2 className="font-semibold">{score}/15</h2>
            <p className="text-xs">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
