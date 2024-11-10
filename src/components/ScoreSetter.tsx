"use state";

import { FC, SetStateAction, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { MoveRight } from "lucide-react";

interface IScoreSetterProps {
  score: number;
  setScore: React.Dispatch<SetStateAction<number>>;
  percentile: number;
  setPercentile: React.Dispatch<SetStateAction<number>>;
  rank: number;
  setRank: React.Dispatch<SetStateAction<number>>;
}

const ScoreSetter: FC<IScoreSetterProps> = ({
  setRank,
  percentile,
  rank,
  setScore,
  setPercentile,
  score,
}) => {
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(score);
  const [newScore, setNewScore] = useState(score);

  const [errors, setErrors] = useState({
    rank: false,
    percentile: false,
    score: false,
  });

  function updateVariables() {
    {
      /* TODO: add validation, if passed only then update */
    }

    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
  }

  return (
    <div className="mr-2 ml-10 flex flex-col gap-5">
      <div className="px-3 py-6 border border-gray-200 rounded-lg flex items-center gap-3">
        <div className="flex gap-3">
          <Image
            src={"/html.png"}
            className="size-12"
            width={64}
            height={64}
            alt="html logo"
          />
          <div className="flex flex-col gap-2">
            <div className="font-bold text-md">Hyper Text Markup Language</div>
            <div className="text-gray-900">
              Questions: 08 | Duration: 15 mins | Submitted on 10th Nov 2024
            </div>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <div className="bg-blue-950 hover:bg-blue-600 hover:cursor-pointer px-5 py-3 rounded-lg  text-white font-bold">
              Update
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle asChild>
                <div className="flex w-full justify-between items-center">
                  <span className="font-bold text-xl">Update scores</span>
                  <Image
                    src={"/html.png"}
                    className="size-9"
                    width={64}
                    height={64}
                    alt="html logo"
                  />
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-7">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="size-6 mr-2 rounded-full bg-blue-900 text-white flex justify-center items-center">
                    1
                  </div>
                  Update your <span className="ml-1 font-extrabold">Rank</span>
                </div>
                <input
                  className="w-[150px] p-2 border border-blue-500 focus:border-none rounded-md"
                  value={newRank}
                  onChange={(ev) => setNewRank(Number(ev.target.value))}
                />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="size-6 mr-2 rounded-full bg-blue-900 text-white flex justify-center items-center">
                    2
                  </div>
                  Update your{" "}
                  <span className="ml-1 font-extrabold">Percentile</span>
                </div>
                <input
                  className="w-[150px] p-2 border border-blue-500 focus:border-none rounded-md"
                  value={newPercentile}
                  onChange={(ev) => setNewPercentile(Number(ev.target.value))}
                />
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center">
                  <div className="size-6 mr-2 rounded-full bg-blue-900 text-white flex justify-center items-center">
                    3
                  </div>
                  Update your
                  <span className="ml-1 text-sm flex font-extrabold">
                    Current Score (out of 15)
                  </span>
                </div>
                <input
                  className="w-[150px] p-2 border border-blue-500 focus:border-none rounded-md"
                  value={newScore}
                  onChange={(ev) => setNewScore(Number(ev.target.value))}
                />
              </div>
            </div>
            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <div className="hover:cursor-pointer p-3 font-extrabold text-sm border-2 rounded-lg border-gray-900 text-blue-900">
                  Cancel
                </div>
              </DialogClose>

              <button
                onClick={updateVariables}
                className="bg-blue-900 text-white px-4 py-2 text-sm rounded-lg flex items-center gap-3"
              >
                Save <MoveRight />
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ScoreSetter;
