import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconsComponent} from '../Components/navbar/navbar-top/icons/icons.component';
import {NavbarComponent} from '../Components/navbar/navbar.component';
import {topNavbar} from '../Models/topNavbar.model';
import {DisplayProductionComponent} from '../Components/display-production/display-production.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, DisplayProductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cellphones';

}
