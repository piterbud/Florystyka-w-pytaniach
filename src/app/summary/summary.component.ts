import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary/summary.service';
import { CommonModule } from '@angular/common';

import { Question } from '../quiz/question.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  questionList: Question[];

  constructor (public summaryService: SummaryService) {}

  ngOnInit(): void {
    this.questionList = this.summaryService.getQuestionList();
  }
}
