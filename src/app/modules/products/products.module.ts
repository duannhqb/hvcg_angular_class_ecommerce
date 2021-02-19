import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
