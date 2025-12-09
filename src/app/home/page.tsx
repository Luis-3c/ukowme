
import NewQuestion from "@/components/newQuestion/NewQuestion";
import Questions from "./Questions";
import QuestionsSkeleton from "./QuestionsSkeleton";
import { Suspense } from "react";
import { ToastNotification } from "@/components/toastNotification/ToastNotification";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<QuestionsSkeleton />}>
        <NewQuestion />
        <Questions />
        <ToastNotification />
      </Suspense>
    </>
  );
}
