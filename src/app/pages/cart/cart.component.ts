import {Component, LOCALE_ID} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ShoppingCartComponent} from '../../../Components/shopping-cart/shopping-cart.component';
import {ProductService} from '../../../services/product.service';
import {FrameSales} from '../../../Models/frameSales.models';
import {DecimalPipe} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);

@Component({
  selector: 'app-cart',
  imports: [
    MatIconModule,
    ShoppingCartComponent,
    DecimalPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ]
})
export class CartComponent {

  itemList:FrameSales[]=[];

  totalAmount = 0;

  constructor(
    public productService: ProductService,
  ) {
    this.itemList= this.productService.cartList;
    this.totalAmount = this.productService.calculateTotalAmount();
    console.log(this.totalAmount);
  }




}
