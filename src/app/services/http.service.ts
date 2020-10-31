import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { Customer } from '../objects/Customer';
//  import { PaperModel } from '../Models/PaperModel';

@Injectable({ providedIn: 'root' })
export class HttpService {
// papers: PaperModel[];
  constructor(private http: HttpClient) { }

  login(id:string): Observable<any[]>  {
    //const strUsers = "assets/users.json";
    const res = "http://localhost:5000/Users/GetUsers";

    return this.http.get(res).pipe(map(data => {
      const usersData = JSON.parse(data as string);
      console.log("usersData: ", usersData);
      return usersData;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };
  GetPapers(): Observable<any>  {
    //const strUsers = "assets/users.json";
    const res = "http://localhost:5000/Paper/GetPapers";

    return this.http.get(res).pipe(map(data => {
      const bt = data['BursaTypeList'];
      const pt = data['PapersList'];
      // const papersData = JSON.parse(data as string);
      console.log("GetPapers: ", data);
      // console.log("BursaTypeList: ", bt);
      // console.log("PapersList: ", pt);

      // return papersData;
      return data;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };
}