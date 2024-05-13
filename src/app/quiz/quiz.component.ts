import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { QuestionsService } from './questions.service';
import { SummaryService } from '../summary/summary.service';
import { SummaryComponent } from '../summary/summary.component';
import { FormsModule } from '@angular/forms';

import { Question } from './question.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, SummaryComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  @Input() goToFirstQuestions: boolean;
  @Input() numberOfQuestions: number;
  @Input() userName: string;
  @Output() backgroundChangedSecondTime = new EventEmitter<boolean>();
  @Output() backgroundChangedThirdTime = new EventEmitter<boolean>();
  @Output() quizSummaryStarted = new EventEmitter<boolean>();

  allQuestions: Question[];
  showQuizBox: boolean = false;
  showNextQuestionButton: boolean = false;
  goToQuizSummary: boolean = false;
  poorQuizScore: boolean = false;
  goToQuizSummaryReport: boolean = false;

  id: number;
  idSentance: string;
  title: string;
  answers: string[];
  correctAnswer: number;
  image: string = "";
  answerAlert: string = "";

  currentQuestionIndex: number = 0;
  score: number = 0;
  scoreCalculation: number;
  chosenQuestionIndex: number;

  constructor(public questionsService: QuestionsService, public summaryService: SummaryService) {}

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
    this.correctAnswer = questions[this.currentQuestionIndex].correctAnswer;
    this.image = `../../assets/quiz_images/${questions[this.currentQuestionIndex].image}`;
  }

  onChange(e: any): void {
    this.chosenQuestionIndex = parseInt(e.target.value);
  }

  showImage(): boolean {
    return this.image.endsWith("png");
  }

  moveImageLeft(): boolean {
    return this.image.includes("q2") || this.image.includes("q7");
  }

  nextQuestion(id: number): void {
    if (this.chosenQuestionIndex >= 0) {

      if (this.chosenQuestionIndex === this.correctAnswer) {
        this.score++;
      }
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex === this.allQuestions.length) {
        this.scoreCalculation = this.score / this.numberOfQuestions;
        if (this.scoreCalculation <= 0.5) {
          this.poorQuizScore = true;
        }
        this.goToFirstQuestions = false;
        this.goToQuizSummary = true;
        this.quizSummaryStarted.emit(this.goToQuizSummary);
      } else {
        this.showQuestions(this.allQuestions);
        this.chosenQuestionIndex = undefined;

        // background changes
        const goToSecondQuestions = true;
        const goToThirdQuestions = true;
        if (id === 3) {
          this.backgroundChangedSecondTime.emit(goToSecondQuestions);
        } else if (id === 6) {
          this.backgroundChangedThirdTime.emit(goToThirdQuestions);
        }
      }
    } else {
      this.answerAlert = 'zaznacz jedną z odpowiedzi...';
      setTimeout(() => {
        this.answerAlert = '';
      }, 1400);
    }
  }

  showQuizSummaryReport() {
    this.summaryService.addQuestionList(this.allQuestions);
    this.goToQuizSummaryReport = true;
  }
}
