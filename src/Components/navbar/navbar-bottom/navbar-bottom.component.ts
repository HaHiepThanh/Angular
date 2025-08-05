import { Component } from '@angular/core';
import {LogoCellphoneSComponent} from './logo-cellphone-s/logo-cellphone-s.component';
import {MatIconModule} from '@angular/material/icon';
import {topNavbar} from '../../../Models/topNavbar.model';
import {Button2Component} from './button2/button2.component';
import {button1Model} from '../../../Models/button1.model';
import {button2Model} from '../../../Models/button2.models';
import {Button1Component} from './button1/button1.component';
import {InputNavbarComponent} from './input-navbar/input-navbar.component';

@Component({
  selector: 'app-navbar-bottom',
  imports: [
    LogoCellphoneSComponent,
    MatIconModule,
    Button2Component,
    Button1Component,
    InputNavbarComponent
  ],
  templateUrl: './navbar-bottom.component.html',
  styleUrl: './navbar-bottom.component.scss'
})
export class NavbarBottomComponent {

  buttonDisplay1:button1Model[] = [
    {
      id:1,
      svg1: "view_module",
      description: "Danh mục",
      svg2: "expand_more"
    },
    {
      id:2,
      svg1: "place",
      description: "Hồ Chí Minh",
      svg2: "expand_more"
    }
  ]


  buttonDisplay2:button2Model[] = [
    {
      id:1,
      svg: "shopping_cart",
      description: "Giỏ hàng"
    },
    {
      id:2,
      svg: "person_pin",
      description: "Đăng nhập"
    },
  ]
}
