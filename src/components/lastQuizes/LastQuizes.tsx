import { getLatQuizes } from "@/services/quizService";
import QuizSummaryChart from "../ui/charts/QuizSummaryChart";

export default async function LastQuizes() {
  const res = await getLatQuizes();

  return (
    <>
      <h2 className="mb-5">Last quizes</h2>
      {res.map((item, i) => (
        <QuizSummaryChart key={i} userName={item.userName} data={item.data} />
      ))}
    </>
  );
}
