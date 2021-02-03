import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('http://localhost:8000/api/products');
  }

  public getProduct(id: number): Observable<any> {
    // return this.http.get<any>(`http://localhost:8000/api/products`).pipe(map(resp => resp));
    return this.http.get('http://localhost:8000/api/products/2');
  }
}
