import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
 
@Injectable()
export class ProductEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType('[Products] GET_PRODUCTS'),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => {
            return ({ type: '[Products] GET_PRODUCTS_SUCCESS', payload: products.data })
        }),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}