import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productReducer } from './state/product.reducer';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects } from './state/product.effects';


@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature('products', productReducer)
  ]
})
export class ProductsModule { }
