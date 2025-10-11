import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private cartItems: Iproducts[] = [];
  
  addToCart(product: Iproducts) {
    let obj = this.cartItems.find((i) => i.id == product.id);
    if (obj) {
      obj.productQuantity++;
    } else {
      this.cartItems.push({ ...product, productQuantity: 1 });
    }
  }
   getCartItems() {
    return this.cartItems;
  }
}
