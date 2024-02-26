import { Suspense } from "react";
import LastQuizes from "../../components/lastQuizes/LastQuizes";
import LastQuizesSkeleton from "../../components/lastQuizes/LastQuizesSkeleton";

export default async function SideBar() {
  return (
    <>
      <section className="w-full sm:w-52 h-screen border-r border-gray-600 sticky top-0 py-2 px-5">
        <Suspense fallback={<LastQuizesSkeleton/>}>
          <LastQuizes />
        </Suspense>
      </section>
    </>
  );
}
