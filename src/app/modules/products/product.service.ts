import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/products`);
  }

  public getProduct(id: number): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/products/${id}`);
  }
}
