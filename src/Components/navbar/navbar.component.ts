import {Component, Input} from '@angular/core';
import {DotsComponent} from './navbar-top/dots/dots.component';
import {SmallTextForHeaderComponent} from './navbar-top/small-text-for-header/small-text-for-header.component';
import {topNavbar} from '../../Models/topNavbar.model';
import {NavbarTopComponent} from './navbar-top/navbar-top.component';

@Component({
  selector: 'app-navbar',
  imports: [
    DotsComponent,
    SmallTextForHeaderComponent,
    NavbarTopComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
