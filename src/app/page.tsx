"use client";

import QuestionAnalysis from "@/components/QuestionAnalysis";
import ScoreSetter from "@/components/ScoreSetter";
import SubjectWiseAnalysis from "@/components/SubjectAnalysis";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(9);
  const [percentile, setPercentile] = useState(65);
  const [rank, setRank] = useState(15);

  return (
    <div className="">
      <h1 className="ml-7 mt-7">Skill Test</h1>
      <div className="mt-7 flex flex-wrap justify-between">
        <div>
          <ScoreSetter
            percentile={percentile}
            rank={rank}
            score={score}
            setPercentile={setPercentile}
            setRank={setRank}
            setScore={setScore}
          />
        </div>
        <div className="flex flex-col gap-6">
          <SubjectWiseAnalysis />
          <QuestionAnalysis correctQuestions={score} />
        </div>
      </div>
    </div>
  );
}
