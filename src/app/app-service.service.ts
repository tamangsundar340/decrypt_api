import { Observable } from 'rxjs';
import { config } from './config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  
  constructor(private http: HttpClient) { }

  
  fetchDataWithObservable2() : Observable<object>{
    return this.http.get(config.DATA_TABLE_API)
  }

  fetchDataWithObservable(){
    return this.http.get(config.DATA_TABLE_API)
  }
}
