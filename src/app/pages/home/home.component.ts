import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products = [
    {id: 1, name: 'Iphone 8', price: 1200, stock: 10, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 2, name: 'Iphone 10', price: 1340, stock: 1, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 3, name: 'Iphone 11', price: 1670, stock: 6, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 4, name: 'Iphone 7s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 5, name: 'Iphone 8s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 6, name: 'Samsung', price: 2340, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
  ];

  product: any = {name: 'default'};
  isShow = true;
  parentName = 'My Name is APPPPP';
  userName = 'admin';


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  public changeName(product: any): void {
    console.log('name has change');
    
    this.product = product;
  }

  public togleUser(){
    console.log('Toogle user');
    
    this.isShow = !this.isShow;
  }

  public getUser(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE2MTE5MzMwMTAsImV4cCI6MTYxNDUyNTAxMH0.MOgqnacQRcQEOSxrC3--MJHQ_K0ttWkv25fAty7V6Ls'
    }
    this.http.get('http://localhost:8000/api/users', {headers}).subscribe((response) => {
      console.log(response);
    });
  }

}
