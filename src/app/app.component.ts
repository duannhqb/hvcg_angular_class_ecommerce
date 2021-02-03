import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  title = 'Angular demo';
  product: any = {name: 'default'};
  version: number = 11;
  isShow = true;
  public products = [
    {id: 1, name: 'Iphone 8', price: 1200, stock: 10, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 2, name: 'Iphone 10', price: 1340, stock: 1, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 3, name: 'Iphone 11', price: 1670, stock: 6, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 4, name: 'Iphone 7s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
  ];

  constructor(){
    console.log('Parent constructor');

  }

  parentName = 'My Name is APPPPP';
  userName = 'admin';

  /// encapsulation
  // 
  public changeName(product: any): void {
    console.log('name has change');
    
    this.product = product;
  }

  public togleUser(){
    console.log('Toogle user');
    
    this.isShow = !this.isShow;
  }
  ngOnChanges(){
    console.log('Parent ngOnChanges');

  }

  ngOnInit(): void {
    console.log('Parent ngOnInit');
  }

  ngDoCheck(){
    console.log('Parent ngDoCheck');

  }
  ngAfterContentInit(){
    console.log('Parent ngAfterContentInit');

  }
  ngAfterContentChecked(){
    console.log('Parent ngAfterContentChecked');

  }
  ngAfterViewInit(){
    console.log('Parent ngAfterViewInit');

  }
  ngAfterViewChecked(){
    console.log('Parent ngAfterViewChecked');

  }
  ngOnDestroy(){
    console.log('Parent ngOnDestroy');

  }


}

// Directive
// 3 loai directives
//1. component directive
//2. structure directive
// 3. attribute directive

// 8 lifecycle
//1. OnChange
//2. OnInit
//3. DoCheck
//4. AfterContentInit
// 5. AfterContentChecked
//6. AfterViewInit
//7. AfterViewChecked
//8. OnDestroy()


// often used lifecycle
// NgOnChanges, NgOnInit, NgAfterViewInit, NgOnDestroy