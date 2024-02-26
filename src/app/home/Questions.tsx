import QuestionCard from "@/components/questionCard/QuestionCard";
import { getQuestions } from "@/services/questionService";

export default async function Questions() {
  const questions = await getQuestions();

  return (
    <div className="mt-10">
      <h1 className="mb-4 pl-5">My qyestions</h1>
      <div className="grid xl:grid-cols-3 xl:gap-6 lg:grid-cols-2 md:grid-cols-2 md:gap-6">
        {questions.map((q) => (
          <QuestionCard key={q.id} />
        ))}
      </div>
    </div>
  );
}
