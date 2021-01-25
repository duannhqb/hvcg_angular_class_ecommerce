import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
interface IProduct {
  id: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: any = {};
  productId: any;

  constructor(public route: ActivatedRoute, public router: Router, public productService: ProductService) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.productId = id;
      this.product = this.productService.getProduct(this.productId);
      console.log(this.product);
      
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
