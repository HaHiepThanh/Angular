import { Component } from '@angular/core';
import {DisplayProductionComponent} from '../../../Components/display-production/display-production.component';
import {FrameSales} from '../../../Models/frameSales.models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    DisplayProductionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
  ) {
  }

  cartItems: FrameSales[] = [];

  addToCart(item: FrameSales) {
    this.cartItems.push(item);
  }

}
