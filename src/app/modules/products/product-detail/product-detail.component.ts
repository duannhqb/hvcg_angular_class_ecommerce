import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface IProduct {
  id: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public products = [
    {id: 1, name: 'Iphone 8', slug: 'iphone-8.htm', price: 1200, stock: 10, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 2, name: 'Iphone 10', price: 1340, stock: 1, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 3, name: 'Iphone 11', price: 1670, stock: 6, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 4, name: 'Iphone 7s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 5, name: 'Iphone 8s', price: 2400, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
    {id: 6, name: 'Samsung', price: 2340, stock: 18, src: 'https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_8_-_Black_45467753-0152-4776-8e6c-ab3f3a7290cf_3442x.png?v=1588926033'},
  ];
  public product: any = {};
  productId: any;

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.productId = id;
      this.product = this.products.filter((item: any) => item.id == id)[0];
    });

  }

  goNext(){
    // console.log('next');
    const prevId = parseInt(this.route.snapshot.paramMap.get('id')!);
    // console.log(prevId);
    // const id: any = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/products', prevId + 1]);
    
  }
  goPrev(){
    console.log('Previous');
     // console.log('next');
     const prevId = parseInt(this.route.snapshot.paramMap.get('id')!);
     // console.log(prevId);
     
     // const id: any = this.route.snapshot.paramMap.get('id');
     this.router.navigate(['/products', prevId - 1]);

  }

}
