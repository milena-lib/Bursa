import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/services/http.service';
import { BursaModel } from 'src/app/classes/BursaModel';
import { PaperModel } from 'src/app/classes/PaperModel';
import { PaperTypeModel } from 'src/app/classes/PaperTypeModel';
//  import { PaperModel } from '../models/PaperModel';
 

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css'],
  // providers: [ HttpService]
})
export class SecuritiesComponent implements OnInit {

  customerName: string = " אורח";
  lastTime: string;
  lastDate:string;
  paperList: PaperModel[];
  bursaList: BursaModel[];
  paperTypeList: PaperTypeModel[];
  columndefs : any[] = ['PaperName','PaperTypeValue', 'LastDeal', 'LastRate', 'LastRatePercent','Amount'];
  selectedBursa: number;

  constructor(private datePipe: DatePipe, private httpService: HttpService) {
    const now = Date()
    this.lastDate = this.datePipe.transform(now, 'dd/MM/yyyy');
    this.lastTime = this.datePipe.transform(now, 'shortTime');
   }

  ngOnInit(): void {
    this.httpService.GetPapers()
      // .pipe(first())
      .subscribe(
              data => {
                  console.log(" securities data: ", data);
                  //debugger;
                  if(!data) {
                    // this.errMsg = "המשתמש לא נמצא";
                    // this.loading = false;
                  
                    return;
                  }
                  this.fillData(data);
               },
              error => {
                  // this.loading = false;
    });
  }

  fillData(data)
  {
      // const bt = data['BursaTypeList'];
      // const pt = data['PapersList'];
      // const papers = data['PapersList'];
      // JSON.parse(data as string);
      // console.log("GetPapers: ", papers);
      // console.log("BursaTypeList: ", bt);
      // console.log("PapersList: ", pt);
      this.bursaList =  data['BursaTypeList'];
      this.paperTypeList = data['PaperTypeList'];
      this.paperList = data['PapersList'];
      console.log("PapersList: ", this.paperList);
      console.log("paperTypeList: ", this.paperTypeList);
      console.log("BursaTypeList: ", this.bursaList);
  }

  onBursaChange($event)
  {
    console.log ("onBursaChange", $event);
  }
  

}
