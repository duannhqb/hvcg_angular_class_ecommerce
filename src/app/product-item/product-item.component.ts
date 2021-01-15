import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: any;
  @Input() user: any;
  @Input() date: any;

  constructor() { }

  ngOnInit(): void {
  }

  public changeTitle(product: any){
    // console.log('change title');
    
    // this.changeName.emit(product);
  }

}
