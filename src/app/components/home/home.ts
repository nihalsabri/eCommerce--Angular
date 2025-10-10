import { Component, inject, Output } from '@angular/core';
import {Store} from '../../models/store';
import {Products } from '../../components/products/products'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../../models/iproducts';
import {CardNumPipe} from '../../pipes/card-num-pipe'
import { UserAuth } from '../../services/user-auth';
@Component({
  selector: 'app-home',
  imports: [Products,CommonModule,FormsModule,CardNumPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  Ddate= new Date();
 filterBynameHome :string =''
ProductList : Iproducts[] = []
authService=inject(UserAuth)
propIsUserLogged:boolean=false

addToCartParent(prd:Iproducts){
let obj = this.ProductList.find((i)=>i.id == prd.id)
if (obj){
  obj.productQuantity ++
}else {
  this.ProductList.push({...prd,productQuantity:1})
}
}
constructor(){
  this.propIsUserLogged = this.authService.isuserloggedProp
}

// decrease quantity 
  Dec(item:any){
  item.productQuantity--;
  if (item.productQuantity){}
  }

  login(){
    this.authService.login("username","1111111")
      this.propIsUserLogged = this.authService.isuserloggedProp

  }

  logout(){
    this.authService.logout()
      this.propIsUserLogged = this.authService.isuserloggedProp


  }
}
