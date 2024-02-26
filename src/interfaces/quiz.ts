export interface QuizQuestion {
  id: number,
  question: string,
  answer: string,
  options: string[]
}

export interface QuizAnswer {
    questionId: number,
    selectedOption: string
}
