import { QuizSummary } from "@/interfaces/chart";
import { QuizQuestion } from "@/interfaces/quiz";

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

export const getQuizQuestions = () :  Promise<QuizQuestion[]> => { 
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const questions = [{
        id: 1,
        question: '¿Cual es mi color favorito?',
        answer: 'Rojo',
        options: ['Azul', 'Rojo', 'Verde', 'Morado', 'Rosa']
    }, {
        id: 2,
        question: '¿Cual es mi comida favorita?',
        answer: 'Milanesa',
        options: ['Azul', 'Rojo', 'Verde', 'Morado', 'Rosa']
    }, {
        id: 3,
        question: 'prueba 3',
        answer: 'prueba 3',
        options: ['Azul', 'Rojo', 'Verde', 'Morado', 'Rosa']
    }, {
        id: 4,
        question: 'Prueba 4',
        answer: 'prueba 4',
        options: ['Azul', 'Rojo', 'Verde', 'Morado', 'Rosa']
    }, {
        id: 5,
        question: 'Prueba 5',
        answer: 'prueba 5',
        options: ['Azul', 'Rojo', 'Verde', 'Morado', 'Rosa']
    }];
    resolve(questions);
    }, 2000)
  })
 }
