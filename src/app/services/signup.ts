import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Signup {
  httpHeaders = {}
  constructor(private http:HttpClient){
this.httpHeaders = {
  headers:new HttpHeaders({
    'Content-Type' : 'application/json'
    //authorization here if needed 
  })
}

  }
  addNewUser(userObj:User) : Observable<User>{
    //post (url,body,headers)
    return this.http.post<User>(`${environment.baseUrl}/users`,userObj,this.httpHeaders)// method post
  }
}
