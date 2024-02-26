import {Question} from '@/interfaces/question'

export const getQuestions = (): Promise<Question[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const questions = [
        {
          id: 1,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 2,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 3,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 4,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 5,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 6,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 7,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 8,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
        {
          id: 9,
          question: "¿Cuál es mi color favorito?",
          answer: "Azul",
        },
      ];
      resolve(questions);
    }, 1000);
  });
};
