import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { addProduct,getProducts,getProductSuccess} from '../actions/product.actions';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType('[Product Component] getProducts'),
        mergeMap(() => this.productService.getProducts().pipe(
            map(products => {
                return ({ type: '[Product Component] getProducts Success', payload: products })
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
