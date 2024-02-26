import { QuizAnswer, QuizQuestion } from "@/interfaces/quiz"
import { useState } from "react";

export const useQuiz = (questions : QuizQuestion[]) => {

    const [progress, setProgress] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);

    const next = (optionIndex: number | null, questionId: number) => {
        const question = questions.find((q) => q.id === questionId);
        if (question && optionIndex){
            setAnswers([...answers, {
                questionId: question.id,
                selectedOption: question.options[optionIndex]
            }]);
            setProgress(progress + 1);   
        }
     }

    return {currentQuestion: questions[progress], progress, next};
}