import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {


  addProductForm!: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      name: [''],
      slug: [''],
      price: [''],
      list_price: [''],
      is_new: [''],
      image: [''],
      description: [''],
      status: [''],
      category: [''],
    }); 
  }

  public handleAddProduct(): void {
    const product = {
      name: this.addProductForm.controls.name.value,
      slug: 'default-slug'+'-'+ Math.round(Math.random()*1000),
      price: this.addProductForm.controls.price.value,
      list_price: this.addProductForm.controls.list_price.value,
      is_new: this.addProductForm.controls.is_new.value,
      image: this.addProductForm.controls.image.value,
      description: this.addProductForm.controls.description.value,
      status: this.addProductForm.controls.status.value,
      category: this.addProductForm.controls.category.value,
    }
    console.log(product);
    
  }

}
