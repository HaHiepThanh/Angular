import {Component, Input, LOCALE_ID, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FrameSales} from '../../Models/frameSales.models';
import {ProductService} from '../../services/product.service';
import {DecimalPipe} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);
class FrameSale {
}

@Component({
  selector: 'app-shopping-cart',
  imports: [
    MatIconModule,
    DecimalPipe
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ]
})
export class ShoppingCartComponent implements OnInit {

  @Input() cartListForSale!:FrameSales;

  constructor(
    public productService: ProductService,
  ) {

  }

  ngOnInit() {
  }

}
