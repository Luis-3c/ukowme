export interface QuizSummary{
    userName: string,
    data: QuizSummaryData[]
}
export interface QuizSummaryData{
  label: string;
  value: number;
  color: string;
}
