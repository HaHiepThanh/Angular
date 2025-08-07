import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {MatIconModule} from '@angular/material/icon';
import {FrameSales} from '../../../Models/frameSales.models';
import {ProductDetailComponent} from '../../../Components/product-detail/product-detail.component';

@Component({
  selector: 'app-detail',
  imports: [
    MatIconModule,
    ProductDetailComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  // productDetail:FrameSales=[];
  //
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private productService: ProductService,
  // ) {
  //   let{id}=this.activatedRoute.snapshot.params;
  //   console.log(id);
  //   this.productDetail = this.productService.getDetailProduct(id);
  // }



}
