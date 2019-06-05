import { Injectable } from '@angular/core';
import  {Http,Response} from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from '../../node_modules/rxjs';
import {Data} from './data';
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:Http) { }

  getData() : Observable <Data> {
   
    return this.http.get('/assets/sample.json').pipe(map ((resp: Response)=>resp.json()));
  
  } 
}
