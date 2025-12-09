import { QuizSummary } from "@/interfaces/chart";
import { QuizQuestion } from "@/interfaces/quiz";
import {cookies} from 'next/headers';
import {API_ENDPOINT} from '@/config.js'
import { Question } from "@/interfaces/question";

export const getLatQuizes = (): Promise<QuizSummary[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const quizes = [
        {
          userName: "Lea Neufcourt",
          data: [
            { label: "Correct", value: 4, color: "#00C49F" },
            { label: "Incorrect", value: 1, color: "#BF2727" },
          ],
        },
        {
          userName: "Lea Neufcourt",
          data: [
            { label: "Correct", value: 5, color: "#00C49F" },
            { label: "Incorrect", value: 0, color: "#BF2727" },
          ],
        },
        {
          userName: "Lea Neufcourt",
          data: [
            { label: "Correct", value: 3, color: "#00C49F" },
            { label: "Incorrect", value: 2, color: "#BF2727" },
          ],
        },
      ];
      resolve(quizes);
    }, 3000);
  });
};

export const getQuizQuestions = (userName: String): Promise<QuizQuestion[]> => {
  return fetch(API_ENDPOINT + "getQuizQuestions/" + userName, {
    headers: { Cookie: cookies().toString() },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.questions;
    });
};

export const getOptions = (question: Question): Promise<QuizQuestion[]> => {
  const req = {
    question
  };
  return fetch(API_ENDPOINT + "getOptions/", {
    headers: { Cookie: cookies().toString() },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.questions;
    });
};
