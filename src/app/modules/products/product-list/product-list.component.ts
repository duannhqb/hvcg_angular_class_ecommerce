import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];
  

  constructor(public productService: ProductService, public store: Store<fromProduct.AppState>) {
    
  }

  ngOnInit(): void {
    this.getProductList();

    this.store.pipe(select((state: any) => state.products)).subscribe((res) => {
      this.products = res.products;      
    });

  }

  public getProductList(){
    this.store.dispatch(new productActions.LoadProducs());
  }

}
// service --> dependency injection
