import { Injectable } from '@angular/core';

import { Question } from '../quiz/question.model';

@Injectable({providedIn: 'root'})
export class SummaryService {
  #questionList: Question[] = [];

  getQuestionList() {
    return [...this.#questionList];
  }

  addQuestionList(allQuestions: Question[]) {
    this.#questionList = allQuestions;
  }
}
