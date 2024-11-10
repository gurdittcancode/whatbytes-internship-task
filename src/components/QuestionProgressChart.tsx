import { FC } from "react";

interface IProgressChartProps {
  progress: number;
}

const QuestionProgressChart: FC<IProgressChartProps> = ({ progress }) => {
  const angle = (progress / 100) * 360;

  return (
    <div className="relative w-40 h-40 mx-auto mt-10">
      <div className="absolute inset-0 rounded-full bg-blue-200"></div>

      <div
        className="absolute inset-0 rounded-full bg-blue-500"
        style={{
          clipPath: `polygon(50% 50%, 50% 100%, ${angle <= 180 ? `${50 - 50 * Math.tan((Math.PI * angle) / 360)}% 100%` : "0% 100%"}, ${angle > 180 ? `0% ${50 + 50 * Math.tan((Math.PI * (angle - 180)) / 360)}%` : "0% 100%"}, ${angle > 270 ? `${50 - 50 * Math.tan((Math.PI * (angle - 270)) / 360)}% 0%` : "0% 0%"}, ${angle > 90 ? "100% 0%" : `100% ${50 + 50 * Math.tan((Math.PI * (90 - angle)) / 360)}%`})`,
        }}
      ></div>
      <div className="absolute inset-6 rounded-full bg-white flex items-center justify-center">
        <span className="text-4xl">🎯</span>
      </div>
    </div>
  );
};

export default QuestionProgressChart;
