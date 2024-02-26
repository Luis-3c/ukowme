"use client"
import { QuizQuestion } from "@/interfaces/quiz";
import ProgressBar from "../progressBar/ProgressBar";
import { useQuiz } from "@/hooks/useQuiz";
import MultipleChoice from "../multiplechoice/MultipleChoice";
import { useState } from "react";
import { questionsPerQuiz } from "@/displaySettings";

interface Props {
    questions: QuizQuestion[]
}

export default function QuizQuestions({questions}: Props) {

    const {currentQuestion, progress, next} = useQuiz(questions);
    const [selectedOption, setSetselectedOption] = useState(null);
    console.log("res usequiz: ", currentQuestion);

   return (
    <>
        <ProgressBar/>
    <div className=" text-center">
      <h1 className=" text-4xl">{currentQuestion?.question}</h1>
      <section className="mt-20">
        <MultipleChoice
          options={currentQuestion?.options}
          setSelectedOption={setSetselectedOption}
        />
      </section>
      <section className=" sm:w-40 ml-auto mt-10">
        <button
          onClick={() => progress === (questionsPerQuiz -1) ? next(selectedOption, currentQuestion.id) : next(selectedOption, currentQuestion.id)}
          disabled={selectedOption === null}
        >
          { progress === (questionsPerQuiz -1) ? 'GET RESULTS' : 'NEXT'}
        </button>
      </section>
    </div>
    </>
   );
}