import {Component, Input} from '@angular/core';
import {NavbarTopComponent} from './navbar-top/navbar-top.component';
import {NavbarBottomComponent} from './navbar-bottom/navbar-bottom.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarTopComponent,
    NavbarBottomComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
