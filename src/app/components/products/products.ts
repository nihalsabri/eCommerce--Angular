

import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, inject, OnDestroy } from '@angular/core';
import { Iproducts } from '../../models/iproducts';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductStatic } from '../../services/product-static';
import { RouterModule } from '@angular/router';
import { ProductWithApi } from '../../services/product-with-api';
import { FilterService, PriceRange } from '../../services/filter-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, CurrencyPipe, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit, OnDestroy {
  ProductList: Iproducts[] = [];
  filteredProducts: Iproducts[] = [];
  
  currentPriceRange = { min: 0, max: 10000 };
  currentNameFilter: string = '';
  
  filterService = inject(FilterService);
  private subscription?: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private prdWithApi: ProductWithApi,
    public staticPrdserv: ProductStatic
  ) {}

  ngOnInit(): void {
    this.prdWithApi.getAllProducts().subscribe((data) => {
      console.log('Products loaded:', data);
      this.ProductList = data;
      this.applyAllFilters();
      
 
      this.subscription = this.filterService.priceRange$.subscribe(range => {
        console.log('Price range changed:', range);
        this.currentPriceRange = range;
        this.applyAllFilters();
      });
    });
  }

ngOnDestroy(): void {
    this.filterService.updatePriceRange(0, 10000);
    
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  applyAllFilters() {
    if (!this.ProductList || this.ProductList.length === 0) {
      this.filteredProducts = [];
      return;
    }
    
    this.filteredProducts = this.ProductList.filter(prd => {
      const matchesPrice = prd.productPrice >= this.currentPriceRange.min &&
                          prd.productPrice <= this.currentPriceRange.max;
      
      const matchesName = this.currentNameFilter === '' ||
                         prd.productName.toLowerCase().includes(this.currentNameFilter.toLowerCase());
      
      return matchesPrice && matchesName;
    });
    
    console.log('Filtered products count:', this.filteredProducts.length);
    this.cd.detectChanges();
  }

  countQty(item: any) {
    item.productQuantity--;
  }

  @Input() set filterByname(value: string) {
    this.currentNameFilter = value;
    this.applyAllFilters();
  }

  @Output() ProductEvent: EventEmitter<Iproducts> = new EventEmitter<Iproducts>();

  addToCartChild(prd: Iproducts) {
    this.ProductEvent.emit(prd);
  }
}