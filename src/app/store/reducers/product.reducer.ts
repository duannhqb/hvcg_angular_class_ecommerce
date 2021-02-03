import { createReducer, on } from '@ngrx/store';
import { addProduct,getProducts,getProductSuccess } from '../actions/product.actions';
 
export const initialState = {
    product: {},
    products: [],
    loading: false,
    loaded: true
};
 
const productReducer = createReducer(
  initialState,
  on(addProduct, (state, payload) => {

      return {
        ...state,
      }
  }),
  on(getProductSuccess, (state: any, payload: any) => {
  
    return {
        ...state,
        products: payload
    }
})
);
 
export function rootReducer(state: any, action: any) {
  return productReducer(state, action);
}