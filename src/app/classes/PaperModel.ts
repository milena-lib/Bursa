import { PaperTypeModel } from './PaperTypeModel';

export class PaperModel{
  PaperId: number;
  PaperName:string;
  PaperTypeValue: PaperTypeModel;
  LastDeal:string;
  LastRate:number;
  LastRatePercent:number;
  Amount :number;
}