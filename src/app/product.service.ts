import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProductDetails(id: number): Observable<any> {
    const productDetailsUrl = `https://dummyjson.com/products/${id}`;
    return this.http.get<any>(productDetailsUrl);
  }
}
