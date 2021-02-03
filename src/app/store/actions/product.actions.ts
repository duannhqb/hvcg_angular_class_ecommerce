import { createAction } from "@ngrx/store";

export const getProducts = createAction('[Products] GET_PRODUCTS');
export const getProductsSuccess = createAction('[Products] GET_PRODUCTS_SUCCESS');
export const getProductsFail = createAction('[Products] GET_PRODUCTS_FAIL');