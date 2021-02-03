import { createAction } from '@ngrx/store';

export const addProduct = createAction('[Product Component] addProduct', (response: any) => response);
export const getProducts = createAction('[Product Component] getProducts');
export const getProductSuccess = createAction('[Product Component] getProducts Success');

