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
  numberOfQuestions: number;
  enteredName: string = '';
  userName: string;

  ngOnInit() {
    setTimeout(() => { this.showHomePageBox = true }, 400);
  }

  startQuiz(numberOfQuestions: number): void {
    this.goToFirstQuestions = true;
    this.numberOfQuestions = numberOfQuestions;
    this.userName = this.enteredName;
    console.log(this.userName);
  }

  secondBackgroundChange(goToSecondQuestions: boolean): void {
    this.goToSecondQuestions = goToSecondQuestions;
  }

  thirdBackgroundChange(goToThirdQuestions: boolean): void {
    this.goToThirdQuestions = goToThirdQuestions;
  }
}
