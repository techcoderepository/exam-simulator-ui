import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-instruction',
  templateUrl: './exam-instruction.component.html',
  styleUrls: ['./exam-instruction.component.css']
})
export class ExamInstructionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onStartTest(): void {
    this.router.navigate(['/starttest']);
  }

}
