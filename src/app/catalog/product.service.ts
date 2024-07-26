import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/catalog/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {} // Inject the HttpClient service, a built in library that allows you to make HTTP requests
  // Define a method that fetches the products from the server

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products');
  }
}
