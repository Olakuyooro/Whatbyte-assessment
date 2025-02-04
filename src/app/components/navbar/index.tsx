import React from "react";
import { FiBarChart } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { TfiMedall } from "react-icons/tfi";

export default function NavBar() {
  return (
    <div className=" hidden md:block border-r border-gray-300 pr-4 pt-4 w-64">
      <ul className="space-y-6 mt-8">
        {[
          {
            icon: <FiBarChart className="text-lg" />,
            label: "Dashboard",
            active: false,
          },
          {
            icon: <TfiMedall className="text-lg" />,
            label: "Skill Test",
            active: true,
          },
          {
            icon: <GrDocument className="text-lg" />,
            label: "Internship",
            active: false,
          },
        ].map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-3 h-12 pl-8 font-medium cursor-pointer rounded-r-full transition duration-300 ease-in-out 
        ${
          item.active
            ? "bg-blue-100 font-semibold text-blue-700"
            : "hover:bg-blue-100"
        }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
