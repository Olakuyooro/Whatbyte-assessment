import Image from "next/image";
import React from "react";
import html_icon from "../../../../public/images/html_icon.png";

type InfoProps = {
  onUpdate: () => void;
};

export default function Info({ onUpdate }: InfoProps) {
  return (
    <section className=" w-[98%] border border-gray-100 rounded-md p-6 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 justify-between md:w-[90%] shadow-sm">
      <Image className="w-12 h-12" src={html_icon} alt="" />
      <div>
        <h3 className="font-semibold">Hypertext Markup Language</h3>
        <div className="flex flex-col md:flex-row md:space-x-2">
          <p>Questions: 08</p>
          <hr className="bg-gray-200 rotate-90 w-4 mt-[0.7rem] hidden md:block"></hr>
          <p>Duration: 15 mins</p>
          <hr className="bg-gray-200 rotate-90 w-4 mt-[0.7rem] hidden md:block"></hr>
          <p>Submitted on 5 June 2021</p>
        </div>
      </div>
      <button
        onClick={onUpdate}
        className="bg-blue-700 w-24 px-6 h-10 flex items-center rounded-md text-white"
      >
        Update
      </button>
    </section>
  );
}
