import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductStatic } from '../../services/product-static';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
//step 1 
currentID:number= 0 
product:Iproducts|undefined;
constructor( private locate:Location ,public active:ActivatedRoute , private productStaticServ:ProductStatic ){
  this.currentID = Number(this.active.snapshot.paramMap.get('idFromUrl'))
  console.log(this.currentID);
  
this.product=this.productStaticServ.getProductById(this.currentID)
  console.log(this.productStaticServ.getProductById(this.currentID));
  
}

//method
goBack(){
this.locate.back()
}
}
