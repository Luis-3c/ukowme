import QuestionCard from "@/components/questionCard/QuestionCard";
import { getQuestions } from "@/services/questionService";

export default async function Questions() {
  const questions = await getQuestions();

  return (
    <div className="mt-10">
      <h1 className="mb-4">My qyestions</h1>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
        {questions.map((q, i) => (
          <QuestionCard key={i} question={q} />
        ))}
      </div>
    </div>
  );
}
