import { Action } from "@ngrx/store";
import { Product } from '../product.model'

export enum ProductActionTypes {
    LOAD_PRODUCTS = '[Products] LOAD_PRODUCTS',
    LOAD_PRODUCTS_SUCCESS = '[Products] LOAD_PRODUCTS_SUCCESS',
    LOAD_PRODUCTS_FAIL = '[Products] LOAD_PRODUCTS_FAIL',

    LOAD_PRODUCT = '[Products] LOAD_PRODUCT',
    LOAD_PRODUCT_SUCCESS = '[Products] LOAD_PRODUCT_SUCCESS',
    LOAD_PRODUCT_FAIL = '[Products] LOAD_PRODUCT_FAIL',

    CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS = '[Products] CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_FAIL = '[Products] CREATE_PRODUCT_FAIL',

    UPDATE_PRODUCT = '[Products] UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = '[Products] UPDATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT_FAIL = '[Products] UPDATE_PRODUCT_FAIL',
}


export class LoadProducs implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(){
        // debugger
    }
}

export class LoadProducsSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}


export class LoadProducsFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
    constructor(public error: string) { }
}

export class LoadProduct implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(public payload: string) { }
}



export class LoadProductSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(public payload: Product) { }
}

export class LoadProductFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(public error: string) { }
}

export class CreateProduct implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(public payload: Product) { }
}

export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(public payload: any) { }
}

export class CreateProductFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
    constructor(public error: string) { }
}

export type Actions = LoadProducs |
    LoadProducsSuccess |
    LoadProducsFail |
    LoadProduct |
    LoadProductSuccess |
    LoadProductFail |
    CreateProduct |
    CreateProductSuccess |
    CreateProductFail;