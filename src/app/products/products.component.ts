import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  componentTitle: string = 'Product component'; // interpolation
  componentAge = 90;
  person = {
    name: 'Product',
    address: 'USA',
    color: 'red'
  }

  isLogin = true;

  @Input() myName: any;

  className = 'products-list';
  isDisabled = false;


 
  

  constructor() { }

  ngOnInit(): void {
  }
  //binding --> cach truyen data

  getMyName(){
    return 'Hello Toan';
  }

  sayMyName(name: string): void {
    alert(name)
  }

}
