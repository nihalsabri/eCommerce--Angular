import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iproducts } from '../../models/iproducts';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NotificationService } from '../../services/notification';

import { Products } from '../products/products';
import { ProductWithApi } from '../../services/product-with-api';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit { 
  productForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  isEditMode = false;
  productId: number = 0; 

  constructor(   
    private fb: FormBuilder,
    private productService: ProductWithApi,
    private router: Router,
    private notificationService: NotificationService,

    private route: ActivatedRoute 
  ) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productPrice: [0, [Validators.required, Validators.min(0)]],
      categoryId: [0, [Validators.required, Validators.min(1)]],
      productDetails: [''],
      productQuantity: [0, [Validators.required, Validators.min(0)]],
      productImgUrl:['', 
        Validators.pattern(/^(https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$|^\/?assets\/.+\.(jpg|jpeg|png|gif|webp|svg))/i)
      ]
    });
  }

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // if id is existed its an edit mode 
    if (id) {
      this.isEditMode = true;
      this.productId = Number(id);
      this.loadProductData(); // load data and fill the form 
    }
  }

  private loadProductData(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.productForm.patchValue(product); // patchValue is a built in method in angular form fill form , // set value fill by sigle item ! which mean multiple lines
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.errorMessage = 'Failed to load product data';
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    if (this.isEditMode) {
      this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
        next: (response) => {
          console.log('Product updated successfully:', response);
          this.notificationService.showSuccess('Product updated successfully! ✓');

          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Error updating product:', error);
          // this.errorMessage = 'Failed to load product data,try again';
           this.notificationService.showError('Failed to load product data,try again!');

          this.isSubmitting = false;
        }
      });
    } else {
      // creation of new product and get a id 
      const newProduct: Iproducts = {
        ...this.productForm.value,
        id: Date.now()
      };
      
      this.productService.addProduct(newProduct).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          this.notificationService.showSuccess('Product Added successfully! ✓');

          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Error adding product:', error);
          // this.errorMessage = 'Failed to add new product , try again';
            this.notificationService.showError('Failed to add new product , try again!');

          this.isSubmitting = false;
        }
      });
    }
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