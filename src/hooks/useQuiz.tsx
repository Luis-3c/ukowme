import { QuizQuestion, QuizState } from "@/interfaces/quiz"
import { quizReducer } from "@/store/quizReducer";
import { useReducer, useState } from "react";

export const useQuiz = (questions : QuizQuestion[]) => {

    const initialState: QuizState = {
        currentQuestion: questions[0],
        progress: 0,
        results: {
            correct: 0,
            incorrect: 0,
            percentage: 0,
            responseTime: ""
        }
    };

    const  [state, dispatch] = useReducer(quizReducer, initialState);

    const handleNext = (optionIndex: number | null, question: QuizQuestion) => {
        console.log('llleggaaaaa')
        if(optionIndex !== null){
            dispatch({
                type: 'NEXT',
                payload: {
                    nextQuestion: questions[state.progress + 1],
                    correct: question.answer === question.options[optionIndex].option
                }
            })
        }
    }

    const handleGetResults = (optionIndex: number | null, question: QuizQuestion) => {
        if(optionIndex !== null){
            dispatch({
                type: 'NEXT',
                payload: {
                    nextQuestion: null,
                    correct: question.answer === question.options[optionIndex].option
                }
            });
            dispatch({
                type: 'GET RESULTS',
            })
        }
    }

    return {currentQuestion: state.currentQuestion, progress:state.progress, handleNext, handleGetResults, results: state.results};
}