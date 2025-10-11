import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter-service';

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

minPrice: number = 0;
  maxPrice: number = 1000;

 
  filterService = inject(FilterService);

  applyFilter() {
    console.log('Applying filter:', this.minPrice, this.maxPrice);
    this.filterService.updatePriceRange(this.minPrice, this.maxPrice);
  }

  resetFilter() {
    this.minPrice = 0;
    this.maxPrice = 10000;
    this.filterService.updatePriceRange(0, 10000);
  }
}