import * as productActions from './product.actions';
import * as fromRoot from '../../../state/app-state';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState extends EntityState<Product> {
    selectedProductId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    products: ProductState
}



export const productAdaptor: EntityAdapter<Product> = createEntityAdapter<Product>();


const initialState =  {
    // products: null,
    selectedProductId: null,
    loading: true,
    loaded: false,
    error: '',
    ids: [],
    entities: {}
}


export function productReducer(state = initialState, action: productActions.Actions){
    switch(action.type){

        case productActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
            const products = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                products
            }
        }
        default: {
            return state;
        }
    }
}

// const getProductFeatureState = createFeatureSelector<ProductState>('products');

// export const getProducts = createSelector(getProductFeatureState, productAdaptor.getSelectors().selectAll);
// export const getProductLoading = createSelector(getProductFeatureState, (state: ProductState)=>state.loading);
// export const getProductLoaded = createSelector(getProductFeatureState, (state: ProductState) =>state.loaded);
// export const getError = createSelector(getProductFeatureState, (state: ProductState) =>state.error);
// export const getCurrentProductId = createSelector(getProductFeatureState, (state: ProductState) =>state.selectedProductId);

// export const getCurrentProduct = createSelector(getProductFeatureState, getCurrentProductId, (state: any) => state.entities[state.selectedProductId]);

// authentication, authorization
// canActivate,
//voi backen: token Set-Cookie
// interceptor // http --> jwt ->refresh_token'egaegaewgaewgawegaewgaegaewg', 2p, jwt->access_token