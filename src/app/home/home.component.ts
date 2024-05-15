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
  goToQuestions: boolean = false;
  showHomePage: boolean = false;
  showHomePageBox: boolean = false;
  goToQuizSummary: boolean = false;

  numberOfQuestions: number;
  enteredName: string = '';
  userName: string;
  nameAlert: string = '';

  ngOnInit() {
    setTimeout(() => { this.showHomePage = true }, 25);
    setTimeout(() => { this.showHomePageBox = true }, 900);
  }

  startQuiz(numberOfQuestions: number): void {
    this.userName = this.enteredName;
    if (this.userName.length > 0) {
      this.goToQuestions = true;
      this.numberOfQuestions = numberOfQuestions;
      setTimeout(()=> {
        this.goToFirstQuestions = true;
      }, 50);
    } else {
      this.nameAlert = 'uzupełnij to pole :)';
      setTimeout(() => {
        this.nameAlert = '';
      }, 1200);
    }
  }

  secondBackgroundChange(goToSecondQuestions: boolean): void {
    setTimeout(()=> {
      this.goToSecondQuestions = goToSecondQuestions;
    }, 50);
  }

  thirdBackgroundChange(goToThirdQuestions: boolean): void {
    setTimeout(()=> {
      this.goToThirdQuestions = goToThirdQuestions;
    }, 50);

  }

  homePageBoxSummaryChange(goToQuizSummary: boolean): void {
    this.goToQuizSummary = goToQuizSummary;
  }
}
