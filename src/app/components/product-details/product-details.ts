import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductStatic } from '../../services/product-static';
import { Location } from '@angular/common';
import { ProductWithApi } from '../../services/product-with-api';
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

arrayOfIDsProp:number[]=[]
myIndex:number= 0 

constructor( private router:Router,
   private prdWithApi:ProductWithApi,
  private locate:Location ,public active:ActivatedRoute ,
   private productStaticServ:ProductStatic ,
  private cd:ChangeDetectorRef){
  // this.currentID = Number(this.active.snapshot.paramMap.get('idFromUrl'))
  //routing observable
  this.active.params.subscribe((x)=>{
    this.currentID =+(x['idFromUrl'])
    // this.product=this.productStaticServ.getProductById(this.currentID)
this.prdWithApi.getProductById(this.currentID).subscribe((data)=> { 
  this.product=data
  this.cd.detectChanges()
  console.log(this.product);
  
})
  })
  console.log(this.currentID);
  
// this.product=this.productStaticServ.getProductById(this.currentID)
//   console.log(this.productStaticServ.getProductById(this.currentID));
  
  this.arrayOfIDsProp = this.productStaticServ.allIds()
  console.log(  this.arrayOfIDsProp);
  

}

//method
goBack(){
this.locate.back()
}


goPrev(){

this.myIndex=this.arrayOfIDsProp.indexOf(this.currentID)
console.log(this.arrayOfIDsProp.indexOf(this.currentID));

this.router.navigate(['/products/', this.arrayOfIDsProp[--this.myIndex]])

}

goNext(){
this.myIndex=this.arrayOfIDsProp.indexOf(this.currentID)
console.log(this.arrayOfIDsProp.indexOf(this.currentID));

this.router.navigate(['/products/', this.arrayOfIDsProp[++this.myIndex]])

}
}
