import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
