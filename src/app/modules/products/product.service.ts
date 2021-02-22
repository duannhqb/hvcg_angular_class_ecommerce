import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.BASE_URL}/products`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.BASE_URL}/products/${id}`);
  }
}
