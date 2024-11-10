import { FC } from "react";
import QuestionProgressChart from "./QuestionProgressChart";

interface IQuestionsAnalysisProps {
  correctQuestions: number;
}

const QuestionAnalysis: FC<IQuestionsAnalysisProps> = ({
  correctQuestions,
}) => {
  return (
    <div className="w-[500px] mr-2 px-5 py-8 border border-gray-200 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold mb-3">Question Analysis</h2>
        <span className="font-bold text-blue-600">{correctQuestions}/15</span>
      </div>
      {correctQuestions !== 15 ? (
        <div>
          <span className="font-semibold">
            You answered {correctQuestions} questions correctly out of 15.
          </span>{" "}
          However, it still needs some improvement.
        </div>
      ) : (
        <div className="font-semibold text-blue-600">
          All questions answered corrctly!
        </div>
      )}
      <QuestionProgressChart progress={(correctQuestions * 100) / 15} />
    </div>
  );
};

export default QuestionAnalysis;
