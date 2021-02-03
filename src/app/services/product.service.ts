import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: IProduct[] = [
    {id: 1, name: 'Iphone 8', slug: 'iphone-8.htm', price: 1200, stock: 10, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 2, name: 'Iphone 10', price: 1340, stock: 1, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 3, name: 'Iphone 11', price: 1670, stock: 6, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 4, name: 'Iphone 7s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 5, name: 'Iphone 8s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 6, name: 'Samsung', price: 2340, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 7, name: 'Oppo', price: 2340, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
  ];

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('http://api.wetime.vn/api/products');
  }

  public getProduct(id: number): IProduct {
    return this.products.filter((item) => item.id == id)[0];
  }
}
