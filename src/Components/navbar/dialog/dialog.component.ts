import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DotsComponent} from '../dots/dots.component';

@Component({
  selector: 'app-dialog',
  imports: [
    DotsComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  data = inject(MAT_DIALOG_DATA);
  constructor() {
    console.log("Dialog data:", this.data);
  }
}
