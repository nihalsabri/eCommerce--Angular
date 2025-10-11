import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { UserAuth } from '../services/user-auth';
import {CardNumPipe} from '../pipes/card-num-pipe';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart-service';
@Component({
  selector: 'app-cart',
  imports: [CardNumPipe, CommonModule, DatePipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  @Input() Ddate: Date = new Date();
  // @Input() ProductList: Iproducts[] = [];
  @Output() decreaseEvent = new EventEmitter<any>();


   cartService = inject(CartService);
  
  get ProductList() {
    return this.cartService.getCartItems();
  }
constructor(){
}



Dec(item: any){
  if (item.productQuantity > 0) {
    item.productQuantity--;
  }
}
    goBack() {
    window.history.back();
  }

}
