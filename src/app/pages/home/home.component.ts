import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {token as MyToken}from '../../constants';
import {decrement,increment,reset} from '../../store/actions/counter.actions';
import { getProducts } from "../../store/actions/product.actions";

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
  public counter: any;


  constructor(public http: HttpClient, public store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
    this.store.select((state: any) => state.productReducer).subscribe((response: any) => {
      // console.log('response', response.products?.payload);
      this.products = response.products?.payload
      // this.counter = response.counter;
      
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
    this.http.get('http://localhost:8000/api/users', {headers}).subscribe((response) => {
      console.log(response);
    });
  }

  public increment(){
    this.store.dispatch(increment());
  }
  public decrement(){
    this.store.dispatch(decrement());
  }
  public reset(){
    this.store.dispatch(reset());
  }

}
