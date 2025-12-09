export interface QuizQuestion {
  _id: number,
  question: string,
  options: Option[],
  answer: string
}

export interface Option {
  option: string
}

export interface QuizAnswer {
    questionId: number,
    selectedOption: Option
}

export interface Quiz {
  userId: number,
  quizOwnerId: number,
  responseTime: string,
  answers: QuizAnswer[]
}

export interface QuizRresults {
  correct: number,
  incorrect : number,
  percentage: number,
  responseTime: string
}

export interface QuizState {
  currentQuestion: QuizQuestion | null,
  progress: number,
  results: QuizRresults
}