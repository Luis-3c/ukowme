"use client";
import { QuizQuestion } from "@/interfaces/quiz";
import ProgressBar from "../progressBar/ProgressBar";
import { useQuiz } from "@/hooks/useQuiz";
import MultipleChoice from "../multiplechoice/MultipleChoice";
import { useState } from "react";
import { questionsPerQuiz } from "@/displaySettings";
import BtnGreen from "../ui/BtnGreen";
import QuizResults from "../quizResults/QuizResults";

interface Props {
  questions: QuizQuestion[];
}

export default function QuizQuestions({ questions }: Props) {
  const { currentQuestion, progress, handleNext, handleGetResults, results } =
    useQuiz(questions);
  const [selectedOption, setSetselectedOption] = useState<number|null>(null);
  console.log("res usequiz: ", currentQuestion);

  return (
    <>
      {progress < questionsPerQuiz && (
        <>
          <ProgressBar progress={progress} />
          <div className=" text-center mt-10">
            <h1 className=" text-4xl">{currentQuestion?.question}</h1>
            <section className="mt-10">
              <MultipleChoice
                options={currentQuestion?.options}
                setSelectedOption={setSetselectedOption}
              />
            </section>
            <section className=" sm:w-40 ml-auto mt-10">
              <BtnGreen
                disabled={selectedOption === null}
                onClick={() =>
                  progress === questionsPerQuiz - 1
                    ? handleGetResults(selectedOption, currentQuestion)
                    : handleNext(selectedOption, currentQuestion)
                }
              >
                {progress === questionsPerQuiz - 1 ? "GET RESULTS" : "NEXT"}
              </BtnGreen>
            </section>
          </div>
        </>
      )}
      {progress === questionsPerQuiz && <QuizResults results={results} />}
    </>
  );
}
