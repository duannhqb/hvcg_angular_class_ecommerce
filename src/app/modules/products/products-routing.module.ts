import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from 'src/app/modules/products/product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'add', component: ProductAddComponent
  },
  {
    path: ':id', component: ProductDetailComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
