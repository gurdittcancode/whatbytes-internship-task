"use client";

import { cn } from "@/lib/utils";
import { Award, ChartNoAxesColumn } from "lucide-react";
import { FC } from "react";

interface ISidebarProps {
  activeTab: string;
  className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ activeTab, className }) => {
  return (
    <div
      className={cn(className, "border-r border-r-gray-300 pr-3 min-h-screen")}
    >
      <div className="flex flex-col gap-4 mt-12 ">
        {activeTab === "Dashboard" ? (
          <div className="flex gap-3 text-md bg-gray-100 p-4 rounded-r-full">
            <ChartNoAxesColumn className="text-blue-700" strokeWidth={2} />
            <p className="text-blue-700 font-extrabold">Dashboard</p>
          </div>
        ) : (
          <div className="flex gap-3 text-md p-4">
            <ChartNoAxesColumn className="text-gray-600 " strokeWidth={2} />
            <p className="text-gray-600 font-extrabold">Dashboard</p>
          </div>
        )}

        {activeTab === "Skill Test" ? (
          <div className="flex gap-3 text-md bg-gray-100 p-4 rounded-r-full">
            <Award className="text-blue-700" strokeWidth={2} />
            <p className="text-blue-700 font-extrabold">Skill Test</p>
          </div>
        ) : (
          <div className="flex gap-3 text-md p-4">
            <Award className="text-gray-600 font-bold" strokeWidth={2} />
            <p className="text-gray-600 font-extrabold">Skill Test</p>
          </div>
        )}

        {activeTab === "Internship" ? (
          <div className="flex gap-3 text-md bg-gray-100 p-4 rounded-r-full">
            <ChartNoAxesColumn className="text-blue-700" strokeWidth={2} />
            <p className="text-blue-700 font-extrabold">Internship</p>
          </div>
        ) : (
          <div className="flex gap-3 text-md p-4">
            <ChartNoAxesColumn
              className="text-gray-600 font-bold"
              strokeWidth={2}
            />
            <p className="text-gray-600 font-extrabold">Internship</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
