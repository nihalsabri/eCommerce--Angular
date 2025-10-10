import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  
  userSubjectProp:BehaviorSubject<boolean>
  constructor(){
    this.userSubjectProp = new BehaviorSubject<boolean>(false)
  }
  login(userName:string,userPassword:string){
let token = " 12345"
localStorage.setItem("token",token)
this.userSubjectProp.next(true)
  }

  logout()
  {
    localStorage.removeItem("token")
    this.userSubjectProp.next(false)

  }

  get isuserloggedProp():boolean{
    return  (localStorage.getItem('token'))?true:false
  }
  userSubjectFunc(){
    return this.userSubjectProp.asObservable()
  }
}
