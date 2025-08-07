import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ShoppingCartComponent} from '../../../Components/shopping-cart/shopping-cart.component';
import {ProductService} from '../../../services/product.service';
import {FrameSales} from '../../../Models/frameSales.models';

@Component({
  selector: 'app-cart',
  imports: [
    MatIconModule,
    ShoppingCartComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  itemList:FrameSales[]=[];

  totalAmount = 0;

  constructor(
    private productService: ProductService,
  ) {
    this.itemList= this.productService.cartList;
    this.totalAmount = this.productService.calculateTotalAmount();
    console.log(this.totalAmount);
  }


}
