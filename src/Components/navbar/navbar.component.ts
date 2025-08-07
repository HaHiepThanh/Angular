import {Component, inject, Input} from '@angular/core';
import {FrameSales} from '../../Models/frameSales.models';
import {DotsComponent} from './dots/dots.component';
import {RectangleComponent} from './rectangle/rectangle.component';
import {LogoCellphoneSComponent} from './logo-cellphone-s/logo-cellphone-s.component';
import {InputNavbarComponent} from './input-navbar/input-navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    DotsComponent,
    RectangleComponent,
    LogoCellphoneSComponent,
    InputNavbarComponent,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  @Input() cartList!: FrameSales[] ;

  navigateToCart(){
    this.router.navigate([`/cart`]).then();
  }

  navigateToHome(){
    this.router.navigate(['/home']).then;
  }

}
