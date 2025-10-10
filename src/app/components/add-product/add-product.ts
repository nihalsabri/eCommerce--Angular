import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iproducts } from '../../models/iproducts';
import { Router } from '@angular/router';
import { Products } from '../products/products';
import { ProductWithApi } from '../../services/product-with-api';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
productForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';


constructor(   private fb: FormBuilder,
    private productService: ProductWithApi,
    private router: Router){
  
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productPrice: [0, [Validators.required, Validators.min(0)]],
      categoryId: [0, [Validators.required, Validators.min(1)]],
      productDetails: [''],
      productQuantity: [0, [Validators.required, Validators.min(0)]],
      productImgUrl:['', [Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i)]]

    });

   
  }

 onSubmit(): void {
    if (this.productForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
 const newProduct: Iproducts = {
      ...this.productForm.value,
      id: Date.now() // أو استخدم: Math.floor(Math.random() * 10000)
    };
    
    this.isSubmitting = true;
    this.errorMessage = '';

    this.productService.addProduct(newProduct).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('Error adding product:', error);
        this.errorMessage = 'فشل في إضافة المنتج. حاول مرة أخرى.';
        this.isSubmitting = false;
      }
    });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.productForm.controls).forEach(key => {
      this.productForm.get(key)?.markAsTouched();
    });
  }


  hasError(controlName: string, errorName: string): boolean {
    const control = this.productForm.get(controlName);
    return !!(control?.hasError(errorName) && control?.touched);
  }
}


