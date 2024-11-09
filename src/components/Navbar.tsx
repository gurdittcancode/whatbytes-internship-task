import { CircleUserRound, Waves } from "lucide-react";
import { FC } from "react";

const Navbar: FC = ({}) => {
  return (
    <nav className="w-full px-5 py-5 flex justify-between items-center border border-b-gray-300">
      <div className="flex items-center">
        <Waves strokeWidth={4} />
        <span className="text-3xl ml-2 font-extrabold text-black">
          WhatBytes
        </span>
      </div>

      {/* User profile icon */}
      <div>
        <div className="border-2 border-gray-300 p-2 rounded-lg text-md flex gap-1.5">
          {/* <Image /> user avatar */}
          <CircleUserRound />
          <p className="font-extrabold">Rahil Siddique</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
