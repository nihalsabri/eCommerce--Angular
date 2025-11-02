import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductStatic } from '../../services/product-static';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../services/notification';
import { ProductWithApi } from '../../services/product-with-api';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
//step 1 
currentID:number= 0 
product:Iproducts|undefined;

arrayOfIDsProp:number[]=[]
myIndex:number= 0 

constructor( private router:Router,
   private prdWithApi:ProductWithApi,
  private locate:Location ,public active:ActivatedRoute ,
   private productStaticServ:ProductStatic ,  
   private dialog: MatDialog,
private notificationService: NotificationService,
  private cd:ChangeDetectorRef){
  // this.currentID = Number(this.active.snapshot.paramMap.get('idFromUrl'))
  //routing observable
  this.active.params.subscribe((x)=>{
this.currentID = Number(x['idFromUrl'])
//     // this.product=this.productStaticServ.getProductById(this.currentID)
this.prdWithApi.getProductById(this.currentID).subscribe((data)=> { 
  this.product=data
  this.cd.detectChanges()
  console.log(this.product);

  
})
  })

  }

//  ngOnInit(): void {
//   this.loadProductIds();
// }
//   loadProductIds(): void {
//   this.prdWithApi.allIds().subscribe({
//     next: (ids) => {
//       this.arrayOfIDsProp = ids;
//       console.log('Available IDs:', this.arrayOfIDsProp);
//               this.updateIndex();

//     },
//     error: (error) => {
//       console.error('Error loading product IDs:', error);
//     }
//   });
// }
  
// this.product=this.productStaticServ.getProductById(this.currentID)
//   console.log(this.productStaticServ.getProductById(this.currentID));
  
  // this.arrayOfIDsProp = this.productStaticServ.allIds()


//method

ngOnInit(): void {
  this.prdWithApi.allIds().subscribe({
    next: (ids) => {
      this.arrayOfIDsProp = ids;
      console.log('Available IDs:', this.arrayOfIDsProp);
    },
    error: (error) => {
      console.error('Error loading product IDs:', error);
    }
  });
}
goBack(){
this.locate.back()
}


goPrev(){

this.myIndex=this.arrayOfIDsProp.indexOf(this.currentID)
console.log(this.arrayOfIDsProp.indexOf(this.currentID));

this.router.navigate(['/products/', this.arrayOfIDsProp[--this.myIndex]])

}

goNext(){
this.myIndex=this.arrayOfIDsProp.indexOf(this.currentID)
console.log(this.arrayOfIDsProp.indexOf(this.currentID));

this.router.navigate(['/products/', this.arrayOfIDsProp[++this.myIndex]])

}


doEdit(){
  this.router.navigate(['/products/edit',this.currentID])

}

doDelete() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Confirm Delete action',
      message: `Are you sure to delete "${this.product?.productName}"؟`
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      this.prdWithApi.deleteProduct(this.currentID).subscribe({
        next: () => {
          // alert('Product deleted successfully ');
                    this.notificationService.showSuccess('Product deleted successfully ✓');

          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error('Error while deleting:', err);
          // alert('Error Happens');
        this.notificationService.showError('Error Happens');

        }
      });
    }
  });
}

}
