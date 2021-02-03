import { createReducer, on } from '@ngrx/store';
import { getProducts, getProductsSuccess } from '../actions/product.actions';

export const productList = [
    {
        id: 1,
        name: 'Iphone 6s',
        price: 1200,
        image: 'noimage'
    },
    {
        id: 2,
        name: 'Iphone 6s',
        price: 1200,
        image: 'noimage'
    },
    {
        id: 3,
        name: 'Iphone 6s',
        price: 1200,
        image: 'noimage'
    }
];


export const initialState = {
    status: 0,
    success: false,
    product: {
        id: 1,
        name: 'Inital Products',
        price: 0,
        image: 'noimage'
    },
    products: []
}

const _productReducer = createReducer(
    initialState,
    // on(getProducts, (state: any) => {
    //     return {
    //         ...state,
    //         products: productList
    //     }
    // }),
    on(getProductsSuccess, (state: any, payload) => {
        return {
            ...state,
            products: payload
        }
    }),

);

export function productReducer(state: any, action: any) {
    return _productReducer(state, action);
    
}
