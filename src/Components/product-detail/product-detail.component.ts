import {Component,LOCALE_ID} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FrameSales} from '../../Models/frameSales.models';
import {DecimalPipe, registerLocaleData} from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);
@Component({
  selector: 'app-product-detail',
  imports: [
    MatIconModule,
    DecimalPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ]
})
export class ProductDetailComponent{

  productDetail!:FrameSales;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    let{id}=this.activatedRoute.snapshot.params;
    console.log(id);
    this.productDetail = this.productService.getDetailProduct(id);
  }
  
  addToCart(id:string){
    this.productService.addProductToCart(id);
  }

}
