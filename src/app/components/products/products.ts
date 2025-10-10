import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproducts } from '../../models/iproducts';
import {CardStyle} from '../../directives/card-style'
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductStatic } from '../../services/product-static';
import { RouterModule } from '@angular/router';
import { ProductWithApi } from '../../services/product-with-api';
@Component({
  selector: 'app-products',
  imports: [FormsModule,CommonModule,CardStyle,CurrencyPipe,RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
// prop  
  ProductList!: Iproducts[];
    filteredProducts: Iproducts[] = [];

// applying injection static service 
  constructor(private cd:ChangeDetectorRef,private prdWithApi:ProductWithApi,public staticPrdserv: ProductStatic){
    
//       this.ProductList = [
//   {
//     id: 1,
//     productName: 'Avada - Responsive Multi-Purpose Theme',
//     productImgUrl: '/assets/image2.png',
//     productQuantity: 15,
//     productPrice: 60,
//     categoryId: 1, // WordPress Themes
//     productDetails: 'The most popular WordPress theme with drag & drop builder, responsive design, and unlimited customization options. Perfect for business, portfolio, and e-commerce websites.'
//   },
//   {
//     id: 2,
//     productName: 'Divi - Elegant WordPress Theme',
//     productImgUrl: '/assets/image.png',
//     productQuantity: 25,
//     productPrice: 89,
//     categoryId: 1, // WordPress Themes
//     productDetails: 'Visual page builder with front-end editing, 800+ pre-made designs, and responsive modules. Ideal for agencies and freelancers building professional websites.'
//   },
//   {
//     id: 3,
//     productName: 'BeTheme - Responsive Multi-Purpose WordPress Theme',
//     productImgUrl: '/assets/image3.png',
//     productQuantity: 0,
//     productPrice: 59,
//     categoryId: 1, // WordPress Themes
//     productDetails: '600+ pre-built websites, Muffin Builder included, WooCommerce compatible. One of the biggest WordPress themes with extensive customization options.'
//   },
//   {
//     id: 4,
//     productName: 'Shopify Dawn - Modern E-commerce Template',
//     productImgUrl: '/assets/image4.png',
//     productQuantity: 12,
//     productPrice: 45,
//     categoryId: 2, // E-commerce Templates
//     productDetails: 'Clean and modern Shopify theme optimized for speed and conversions. Features product filtering, mega menu, and mobile-first design approach.'
//   },
//   {
//     id: 5,
//     productName: 'Kalium - Creative Theme for Professionals',
//     productImgUrl: '/assets/image.png',
//     productQuantity: 18,
//     productPrice: 59,
//     categoryId: 3, // Creative Templates
//     productDetails: 'Portfolio and agency theme with stunning animations, multiple layout options, and premium plugins included. Perfect for creative professionals and agencies.'
//   }
// ];

//observer
// this.prdWithApi.getAllProducts().subscribe((data)=>{
//   console.log(data);
//   this.cd.detectChanges()// zone js to load prd info fast
//     this.ProductList=data;
//  console.log(this.ProductList);
// }
// )
// //static 
// // this.ProductList = this.staticPrdserv.getAllProducts();
// //api data

//     this.filteredProducts = this.ProductList;
//  console.log(this.ProductList);
 
 
  }

  ngOnInit(): void {
    this.prdWithApi.getAllProducts().subscribe((data)=>{
  console.log(data);
    this.ProductList=data;
      this.cd.detectChanges()// zone js to load prd info fast
 console.log(this.ProductList);
 
    this.filteredProducts = this.ProductList; 

}
)
    
  }
// doSearch(valueSearch:string) : Iproducts[]{
//   valueSearch= valueSearch.toLowerCase();
  
//  return this.filteredProducts = this.ProductList.filter((i:Iproducts)=>i.productName.toLowerCase().includes(valueSearch))
// }


  // methods
  countQty(item:any){
  item.productQuantity--;
  }

  //get value from parent 
@Input() set filterByname (value:string){
//     this.filteredProducts = this.staticPrdserv.doSearch(value);//update search feature 
this.prdWithApi.getAllProducts().subscribe(
  { next: (data)=>{
this.filteredProducts= data.filter((prd:Iproducts)=>prd.productName.toLocaleLowerCase().includes(value)) ;
  this.cd.detectChanges()// zone js to load prd info fast 

}})

}
@Output() ProductEvent:EventEmitter <Iproducts> = new EventEmitter <Iproducts>()

  addToCartChild(prd:Iproducts){
     this.ProductEvent.emit(prd)
  }
}

