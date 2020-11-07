import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
form: FormArray; 
 
bursaIsrael = [
  {
    name: 'ת"א 35',
    dailyChange: '0.29%',
    idx: '1,373.98',
    selected: '',
    fieldType: 'SELECT',
    securities: [
      { name: 'טבע', value: 'teva'},
      { name: 'פועלים', value: 'pohalim'},
      { name: 'דיסקונט', value: 'discount'},
      { name: 'לאומי', value: 'leumi'},
      { name: 'פריגו', value: 'prigo'},
      { name: 'מזרחי טפחות', value: 'mizrahiTfahot'},
      { name: 'נייס', value: 'nice'},
      { name: 'בזק', value: 'bezeq'},
      { name: 'שופרסל', value: 'shopersal'}
    ]
  },
  {  
    name: 'ת"א 125',
    dailyChange: '0.38%',
    idx: '1,416.01',
    selected: '',
    fieldType: 'SELECT',
    securities: [
      { name: 'הראל השקעות', value: 'harel'},
      { name: 'סאפיינס', value: 'sapeince'},
      { name: 'אלביט מערכות', value: 'elbit'},
      { name: 'מיטרוניקס', value: 'mitronix'},
      { name: 'גילת', value: 'gilat'},
      { name: 'טאואר', value: 'tower'},
      { name: 'איי.סי.אל', value: 'acl'},
      { name: 'בזק', value: 'bezeq'},
      { name: 'אלטשולר שחם גמל', value: 'altshulerShahar'}
    ]
  },
  {
    name: 'ת"א גלובל בלוקט',
    dailyChange: '0.37%',
    idx: '497.90',
    selected: '',
    fieldType: 'INPUT',
    securities: [
      // { name: 'קמטק', value: 'kamtech'},
      // { name: 'מטריקס', value: 'matrix'},
      // { name: 'פורמולה מערכות', value: 'formulaSystem'},
      // { name: 'דורל אנרגיה', value: 'durelEnergy'},
      // { name: 'ארד', value: 'arad'},
      // { name: 'אלוט', value: 'alot'},
      // { name: 'סומוטו', value: 'somoto'},
      // { name: 'מיט-טק', value: 'mitTech'},
      // { name: 'איתמר', value: 'itamar'}
    ]
  },
  {
    name: 'ת"א 90',
    dailyChange: '0.56%',
    idx: '1,505.14',
    selected: '',
    fieldType: 'SELECT',
    securities: [
      { name: 'מגדל ביטוח', value: 'migdal'},
      { name: 'ישראכרט', value: 'isracard'},
      { name: 'דנאל', value: 'danel'},
      { name: 'גב ים', value: 'gavYam'},
      { name: 'גזית גלוב', value: 'gazitGlob'},
      { name: 'פתאל החזקות', value: 'fatal'},
      { name: 'פז נפט', value: 'paz'},
      { name: 'סלע נדלן', value: 'selaNadlan'},
      { name: 'ריט 1', value: 'rit1'}
    ]
  }
];
   
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.form = this.createForm(null);
  }

  // createForm(data:any[]):FormArray
  // {
  //    let controls:FormGroup[]=
  //       data?data.map(x=>this.createLineArray(x))
  //           :[this.createLineArray(null)];
  //    return this.fb.array(controls);
  // }

  // createLineArray(data:any):FormGroup
  // {
  //     return this.fb.group({
  //       field1:[data && data.field2?data.field2:null,Validators.required],
  //       field2:[data && data.field1?data.field1:null,Validators.required]
  //     })
  // }

  onChangeSelected($event,i) {
    this.bursaIsrael[i].selected = $event.value;
  }

  onChangeInput($event, i) {
    this.bursaIsrael[i].selected = $event.target.value;
  }

  send() {
    console.log("bursaIsrael: ", this.bursaIsrael);
  }

}
