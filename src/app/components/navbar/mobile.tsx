"use client";

import { useState } from "react";
import { FiBarChart } from "react-icons/fi";
import { TfiMedall } from "react-icons/tfi";
import { GrDocument } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
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
  ];

  return (
    <div>
      <div
        className="md:hidden ml-2 p-2 text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <IoMdMenu />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <ul className="space-y-6 mt-8 p-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-3 h-12 pl-4 font-medium cursor-pointer rounded-r-full transition duration-300 ease-in-out 
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
    </div>
  );
}
