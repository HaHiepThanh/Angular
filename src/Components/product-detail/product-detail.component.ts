import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FrameSales} from '../../Models/frameSales.models';

@Component({
  selector: 'app-product-detail',
    imports: [
        MatIconModule
    ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  productDetail!:FrameSales;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    let{id}=this.activatedRoute.snapshot.params;
    console.log(id);
    this.productDetail = this.productService.getDetailProduct(id);
  }
}
