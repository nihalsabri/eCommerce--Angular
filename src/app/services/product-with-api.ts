import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iproducts } from '../models/iproducts';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductWithApi {
  
  //call server 

  constructor(private http:HttpClient){


  }
  getAllProducts():Observable<Iproducts[]>{
return this.http.get<Iproducts[]>(`${environment.baseUrl}/products`)
  }

  getProductById(prdid:number):Observable<Iproducts>{
    return this.http.get<Iproducts>(`${environment.baseUrl}/products/${prdid}`)
  }

  search(value:string):Observable<Iproducts[]>{
    return this.http.get<Iproducts[]> (`${environment.baseUrl}/products?productName=${value}`)}


    addProduct(product: Iproducts): Observable<Iproducts> {
    return this.http.post<Iproducts>(`${environment.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: Iproducts): Observable<Iproducts> {
    return this.http.put<Iproducts>(`${environment.baseUrl}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/products/${id}`);
  }

 allIds(): Observable<number[]> {
    return this.http.get<Iproducts[]>(`${environment.baseUrl}/products`).pipe(
      map((products: Iproducts[]) => products.map((prd: Iproducts) =>  Number(prd.id)))
    );
  }
}
