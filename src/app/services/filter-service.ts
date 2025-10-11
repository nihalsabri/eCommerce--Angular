import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PriceRange {
  min: number;
  max: number;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  
  private priceRangeSubject: BehaviorSubject<PriceRange>;
  public priceRange$: Observable<PriceRange>;

  constructor() {
    this.priceRangeSubject = new BehaviorSubject<PriceRange>({
      min: 0,
      max: 10000
    });
    
    this.priceRange$ = this.priceRangeSubject.asObservable();
  }

  updatePriceRange(min: number, max: number): void {
    console.log('FilterService: Updating price range', { min, max });
    this.priceRangeSubject.next({ min, max });
  }

  getCurrentPriceRange(): PriceRange {
    return this.priceRangeSubject.value;
  }

  resetPriceRange(): void {
    this.priceRangeSubject.next({ min: 0, max: 10000 });
  }
}