import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
/*
  Generated class for the DataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataServicesProvider Provider');
  }



  getData(url: string): Observable<any[]>{
    return this.http.get<any[]>(url) ;
  }
}
