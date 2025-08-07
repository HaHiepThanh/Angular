import {Component, inject, Input} from '@angular/core';
import {FrameSales} from '../../Models/frameSales.models';
import {DotsComponent} from './dots/dots.component';
import {RectangleComponent} from './rectangle/rectangle.component';
import {LogoCellphoneSComponent} from './logo-cellphone-s/logo-cellphone-s.component';
import {InputNavbarComponent} from './input-navbar/input-navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

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

  @Input() cartList!: FrameSales[] ;

  dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '1000px',
      height: '700px',
      data: {
        cartList: this.cartList,
      },
    });
  }

}
