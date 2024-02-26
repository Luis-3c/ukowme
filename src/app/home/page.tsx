//import { useUserContext } from "@/hooks/useUserContext";

import NewQuestion from "@/components/newQuestion/NewQuestion";
import Questions from "./Questions";

export default async function Home() {
  //const {user, setUser} = useUserContext();

  return (
    <>
      <NewQuestion />
      <Questions />
    </>
  );
}
