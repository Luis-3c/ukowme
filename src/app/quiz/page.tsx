import { getQuizQuestions } from "@/services/quizService";
import QuizQuestions from "../../components/quizQuestions/QuizQuestions";

export default async function Quiz() {

    const questions = await getQuizQuestions();

    return(
        <div className="px-6 lg:px-48 mt-10">
        <QuizQuestions questions={questions} />
        </div>
    )
    
}