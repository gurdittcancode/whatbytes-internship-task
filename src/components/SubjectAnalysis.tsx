import { FC } from "react";

const SubjectWiseAnalysis: FC = () => {
  const subjects = [
    {
      name: "HTML Tools, Forms, History",
      progress: 80,
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      blankColor: "bg-blue-200",
    },
    {
      name: "Tags & References in HTML",
      progress: 60,
      color: "text-orange-500",
      bgColor: "bg-orange-500",
      blankColor: "bg-orange-200",
    },
    {
      name: "Tables & References in HTML",
      progress: 24,
      color: "text-red-500",
      bgColor: "bg-red-500",
      blankColor: "bg-red-200",
    },
    {
      name: "Tables & CSS Basics",
      progress: 96,
      color: "text-green-500",
      bgColor: "bg-green-500",
      blankColor: "bg-green-200",
    },
  ];

  return (
    <div className="w-[500px] mr-2 px-5 py-8  border border-gray-200 rounded-lg">
      <h2 className="text-md font-bold mb-8">Syllabus wise analysis</h2>
      <div className="space-y-6">
        {subjects.map((subject, index) => (
          <div key={index} className="space-y-3">
            <span className="text-sm font-medium">{subject.name}</span>
            <div className="flex items-center space-x-2">
              <div className="flex-grow max-w-[350px] relative h-[0.6rem] rounded-full overflow-hidden">
                <div className={`absolute inset-0 ${subject.blankColor}`}></div>
                <div
                  style={{ width: `${subject.progress}%` }}
                  className={`absolute inset-y-0 left-0 ${subject.bgColor} rounded-full`}
                ></div>
              </div>
              <span
                className={`text-sm font-bold ${subject.color} w-12 text-right`}
              >
                {subject.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectWiseAnalysis;
