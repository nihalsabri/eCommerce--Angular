import { Component } from '@angular/core';
import { Signup } from '../../services/signup';
import { User } from '../../models/user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  userProp:FormGroup 
constructor(private userService:Signup){
this.userProp = new FormGroup({
  fname: new FormControl('',[Validators.required,Validators.minLength(3)])
,lname:new FormControl('',[Validators.required])
,email:new FormControl('',[Validators.required])
,password:new FormControl('',[Validators.required])

})

}

get fnameMethod(){
  return this.userProp.get('fname')
}
  addNewUser(){
this.userService.addNewUser(this.userProp.value).subscribe(data => console.log(data))

  }
}
