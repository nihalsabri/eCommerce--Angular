import { Component } from '@angular/core';
import { Signup } from '../../services/signup';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {
  userProp:User = {} as User
constructor(private userService:Signup){
  // let u:User={
  //   // fname:"ali",
  //   // lname:"ahmed",
  //   // email:"example@gmail.com",
  //   // password:"12345",
  //   // address:"cairo"
  // }

}
  addNewUser(){
this.userService.addNewUser(this.userProp).subscribe(data => console.log(data))

  }
}
