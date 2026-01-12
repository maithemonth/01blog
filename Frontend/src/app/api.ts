import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http:HttpClient){}
 testLOgin(data:any){
  console.log('SErvice recieved :', data);
  return  this.http.post<string>('http://localhost:8080/login', data);
 }
}
