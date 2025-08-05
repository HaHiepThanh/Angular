import {Component, inject, Input, OnInit} from '@angular/core';
import {FrameSales} from '../../Models/frameSales.models';
import {DotsComponent} from './dots/dots.component';
import {RectangleComponent} from './rectangle/rectangle.component';
import {IconsComponent} from './icons/icons.component';
import {SmallTextForHeaderComponent} from './small-text-for-header/small-text-for-header.component';
import {LogoCellphoneSComponent} from './logo-cellphone-s/logo-cellphone-s.component';
import {InputNavbarComponent} from './input-navbar/input-navbar.component';
import {topNavbar} from '../../Models/topNavbar.model';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-navbar',
  imports: [
    DotsComponent,
    RectangleComponent,
    IconsComponent,
    SmallTextForHeaderComponent,
    LogoCellphoneSComponent,
    InputNavbarComponent,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() cartList!: FrameSales[] ;

  dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        cartList: this.cartList,
      },
    });
  }

  topHeader: topNavbar[]=[
    {
      id: 1,
      svg: 'brightness_7',
      description: 'Sản phẩm Chính hãng - Xuẩt VAT đầy '
    },
    {
      id: 2,
      svg: 'local_shipping',
      description: 'Giao nhanh - Miễn phí cho đơn 300'
    },
    {
      id: 3,
      svg: 'cached',
      description: 'Thu cũ giá ngon - Lên đời tiết kiệm'
    },
    {
      id: 4,
      svg: 'home',
      description: 'Cửa hàng gần bạn'
    },
    {
      id: 5,
      svg: 'descriptions',
      description: 'Tra cứu đơn hàng'
    },
    {
      id: 6,
      svg: 'phone',
      description: '1800 2079'
    }
  ]

}
