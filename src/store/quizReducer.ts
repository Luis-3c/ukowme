import { QuizState } from "@/interfaces/quiz";

export const quizReducer = (state: QuizState, action: any) => {
    const {type, payload} = action;
    switch (type) {
        case 'NEXT':
            return {
            currentQuestion: payload.nextQuestion,
            progress: state.progress + 1,
            results: {
                correct: payload.correct ? state.results.correct + 1 : state.results.correct,
                incorrect: payload.correct ? state.results.incorrect : state.results.incorrect + 1,
                percentage: 0,
                responseTime: "16s"
            }
        }

        case 'GET RESULTS':
            return {
                ...state,
                results: {
                    ...state.results,
                    percentage: state.results.correct / state.progress * 100,
                    responseTime: "16s"
                }
            }
        default:
            return state;
    }
};