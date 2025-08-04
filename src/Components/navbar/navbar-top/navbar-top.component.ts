import {Component, Input} from '@angular/core';
import {topNavbar} from '../../../Models/topNavbar.model';
import {DotsComponent} from './dots/dots.component';
import {SmallTextForHeaderComponent} from './small-text-for-header/small-text-for-header.component';
import {RectangleComponent} from './rectangle/rectangle.component';
import {IconsComponent} from './icons/icons.component';

@Component({
  selector: 'app-navbar-top',
  imports: [
    DotsComponent,
    SmallTextForHeaderComponent,
    RectangleComponent,
    IconsComponent
  ],
  templateUrl: './navbar-top.component.html',
  styleUrl: './navbar-top.component.scss'
})
export class NavbarTopComponent {

  topHeader: topNavbar[] = [
    {
      id: 1,
      svg: 'attach_money',
      description: 'Sản phẩm Chính Hãng - Xuất VAT đầy đủ',
    },
    {
      id: 2,
      svg: 'local_shipping',
      description: 'Giao nhanh - Miễn phí cho đơn 300k',
    },
    {
      id: 3,
      svg: 'cached',
      description: 'Thu cũ giá ngon - Lên đời tiết kiệm',
    },
    {
      id: 4,
      svg: 'home',
      description: 'Cửa hàng gần bạn',
    },
    {
      id: 5,
      svg: 'description',
      description: 'Tra cứu đơn hàng',
    },
    {
      id: 6,
      svg: 'perm_phone_msg',
      description: '1800 297',
    }
  ]

}
