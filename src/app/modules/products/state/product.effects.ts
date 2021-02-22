import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import * as productActions from './product.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType<productActions.LoadProducs>(productActions.ProductActionTypes.LOAD_PRODUCTS),
        mergeMap((action: productActions.LoadProducs) => this.productService.getProducts().pipe(
            map((products: any) => new productActions.LoadProducsSuccess(products.data)),
            catchError(err => of(new productActions.LoadProducsFail(err)))
        )
    ));
}