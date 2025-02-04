import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/whatbyte_logo.jpeg";
import avatar from "../../../../public/images/avatar.jpg";

export default function Header() {
  return (
    <div className="flex justify-between pt-4 pb-4 px-4 border-b border-gray-300 ">
      <Image className="w-40" src={logo} alt="Logo" />
      <div className="flex space-x-2 my-auto px-2 py-1 border border-gray-300 border-solid rounded-md ">
        <Image className="h-8 w-8 rounded-full" src={avatar} alt="" />
        <p className="mt-[0.4rem] text-sm font-medium">Alaba Olatun</p>
      </div>
    </div>
  );
}
