import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
// import { EventEmitter } from 'events';

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
  @Input() products: any;

  @Output() changeName = new EventEmitter<string>();

  className = 'products-list';
  isDisabled = false;

  myClassName = 'container';

  date = 3;

  user = {
    name: 'Toan',
    isAdmin: false,
    email: 'toan@gmail.com'
  };

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

  public changeTitle(product: any){
    // console.log('change title');
    
    this.changeName.emit(product);
  }



}
