import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-question-uploader',
  templateUrl: './bulk-question-uploader.component.html',
  styleUrls: ['./bulk-question-uploader.component.css']
})
export class BulkQuestionUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'excelReader';
  data:[][];
  onFileUpload(evt:any){
    const target : DataTransfer = <DataTransfer> (evt.target);

    if(target.files.length !=1) throw new Error("Please upload single file at once");
    const reader:FileReader = new FileReader();
    reader.onload = (e:any) =>{
      const bstr:string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read( bstr,{type: 'binary'});
      const wsname = wb.SheetNames[0];
      const ws:XLSX.WorkSheet = wb.Sheets[wsname];
      console.log(ws);
      this.data =(XLSX.utils.sheet_to_json(ws,{header: 1}));
      console.log(this.data)
    }
    reader.readAsBinaryString(target.files[0]);
  }

}
