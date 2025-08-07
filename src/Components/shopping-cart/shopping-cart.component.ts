import {Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FrameSales} from '../../Models/frameSales.models';

class FrameSale {
}

@Component({
  selector: 'app-shopping-cart',
    imports: [
        MatIconModule
    ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {

  @Input() cartListForSale!:FrameSales;

  constructor() {

  }

  ngOnInit() {
  }

}
