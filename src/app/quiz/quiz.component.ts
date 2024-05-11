import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { QuestionsService } from './questions.service';

import { Question } from './question.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  @Input() goToFirstQuestions: boolean;
  @Input() numberOfQuestions: number;
  @Output() backgroundChangedSecondTime = new EventEmitter<boolean>();
  @Output() backgroundChangedThirdTime = new EventEmitter<boolean>();

  allQuestions: Question[];
  showQuizBox: boolean = false;
  showNextQuestionButton: boolean = false;

  id: number;
  idSentance: string;
  title: string;
  answers: string[];
  image: string = "";
  currentQuestionIndex: number = 0;
  score: number = 0;

  constructor(public questionsService: QuestionsService) {}

  ngOnInit() {
    this.allQuestions = this.questionsService.questions;
    this.allQuestions.length = this.numberOfQuestions;
    setTimeout(() => { this.showQuizBox = true }, 200);
    setTimeout(() => {
      this.showQuestions(this.allQuestions);
      this.showNextQuestionButton = true;
    }, 1200);
  }

  showQuestions(questions: Question[]): void {
    this.id = questions[this.currentQuestionIndex].id;
    this.idSentance = `Pytanie ${questions[this.currentQuestionIndex].id}`;
    this.title = questions[this.currentQuestionIndex].title;
    this.answers = questions[this.currentQuestionIndex].answers;
    this.image = `../../assets/quiz_images/${questions[this.currentQuestionIndex].image}`;
  }

  showImage(): boolean {
    return this.image.endsWith("png");
  }

  moveImageLeft(): boolean {
    return this.image.includes("q2") || this.image.includes("q7");
  }

  nextQuestion(id: number): void {
    this.currentQuestionIndex++;
    this.showQuestions(this.allQuestions);

    const goToSecondQuestions = true;
    const goToThirdQuestions = true;
    if (id === 3) {
      this.backgroundChangedSecondTime.emit(goToSecondQuestions);
    } else if (id === 6) {
      this.backgroundChangedThirdTime.emit(goToThirdQuestions);
    }
  }
}
