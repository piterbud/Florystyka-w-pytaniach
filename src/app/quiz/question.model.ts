export interface Question {
  title: string;
  answers: string[];
  correctAnswer: number;
  image: string;
  id: number;
  questionName: string;
  userAnswer?: number;
}
