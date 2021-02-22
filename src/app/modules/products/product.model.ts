export interface Product {
    id?: number;
    name: string;
    price: number;
    list_price?: number;
    image: string;
    slug?: string;
    is_new?: number|string;
    status?: number|string;
    description?: string;
    category?: any;
}