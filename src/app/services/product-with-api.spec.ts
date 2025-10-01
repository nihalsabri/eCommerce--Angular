import { TestBed } from '@angular/core/testing';

import { ProductWithApi } from './product-with-api';

describe('ProductWithApi', () => {
  let service: ProductWithApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductWithApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
