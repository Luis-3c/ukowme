import { questionsPerQuiz } from "@/displaySettings";
import { useEffect, useState } from "react";

interface Props {
  progress: number
};

export default function ProgressBar({progress} : Props) {
  const [percentage, setPercentage] = useState(0);
  console.log('progress bar')
  useEffect(() => {
    if(progress > 0 && progress <= questionsPerQuiz){
      setPercentage(percentage + (100/questionsPerQuiz));
      console.log('progress bar - useEffect')
    }
  }, [progress])

    return(
        <div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 transition-all"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
        </div>
    )
}