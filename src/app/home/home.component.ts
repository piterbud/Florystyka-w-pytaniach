import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuizComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  goToFirstQuestions: boolean = false;
  goToSecondQuestions: boolean = false;
  goToThirdQuestions: boolean = false;
  showHomePageBox: boolean = false;
  goToQuizSummary: boolean = false;
  numberOfQuestions: number;
  enteredName: string = '';
  userName: string;
  nameAlert: string = '';

  ngOnInit() {
    setTimeout(() => { this.showHomePageBox = true }, 400);
  }

  startQuiz(numberOfQuestions: number): void {
    this.userName = this.enteredName;
    if (this.userName.length > 0) {
      this.goToFirstQuestions = true;
      this.numberOfQuestions = numberOfQuestions;
    } else {
      this.nameAlert = 'uzupełnij to pole :)';
      setTimeout(() => {
        this.nameAlert = '';
      }, 1200);
    }
  }

  secondBackgroundChange(goToSecondQuestions: boolean): void {
    this.goToSecondQuestions = goToSecondQuestions;
  }

  thirdBackgroundChange(goToThirdQuestions: boolean): void {
    this.goToThirdQuestions = goToThirdQuestions;
  }

  homePageBoxSummaryChange(goToQuizSummary: boolean): void {
    this.goToQuizSummary = goToQuizSummary;
  }
}
