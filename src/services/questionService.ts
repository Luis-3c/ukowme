import { API_ENDPOINT } from "@/config";
import { Question } from "@/interfaces/question";
import {cookies} from 'next/headers';

export const getQuestions = (): Promise<Question[]> => {
  return fetch(API_ENDPOINT + "getQuestions", {
    headers: { Cookie: cookies().toString() },
  })
    .then((res) => res.json())
    .then((res) => res.questions);
};
