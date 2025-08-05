import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconsComponent} from '../Components/navbar/icons/icons.component';
import {NavbarComponent} from '../Components/navbar/navbar.component';
import {topNavbar} from '../Models/topNavbar.model';
import {DisplayProductionComponent} from '../Components/display-production/display-production.component';
import {button1Model} from '../Models/button1.model';
import {button2Model} from '../Models/button2.models';
import {FrameSales} from '../Models/frameSales.models';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, DisplayProductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cellphones';

  cartItems: FrameSales[] = [];

  addToCart(item: FrameSales) {
    this.cartItems.push(item);
  }

}
