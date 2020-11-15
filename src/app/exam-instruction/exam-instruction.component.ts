import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-instruction',
  templateUrl: './exam-instruction.component.html',
  styleUrls: ['./exam-instruction.component.css']
})
export class ExamInstructionComponent implements OnInit {
  constructor(private router: Router, private _Activatedroute:ActivatedRoute) { }
certificationId:String;
  ngOnInit(): void {
    this.certificationId=this._Activatedroute.snapshot.paramMap.get("certificationId");
  }

  onStartExam(): void {
    this.router.navigate(['/startexam',this.certificationId]);
  }

}
