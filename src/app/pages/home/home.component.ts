import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct,getProducts } from 'src/app/store/actions/product.actions';
import { AppState } from 'src/app/store/app-state';
import {token as MyToken}from '../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: any = [];

  product: any = {name: 'default'};
  isShow = true;
  parentName = 'My Name is APPPPP';
  userName = 'admin';


  constructor(public http: HttpClient, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getProducts());

    this.store.select(state => state).subscribe((response: any) => {
      // this.products = response.products
      this.products = response.products.products.payload?.data;

      // console.log(this.products);
      

    });
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
    const token = localStorage.getItem(MyToken.access_token);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    // this.http.get('http://api.wetime.vn/api/products', {headers}).subscribe((response) => {
    //   console.log(response);
    // });
  }

}
