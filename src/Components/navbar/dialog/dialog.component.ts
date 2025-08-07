import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardTitleGroup} from '@angular/material/card';

@Component({
  selector: 'app-dialog',
  imports: [
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCard
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
