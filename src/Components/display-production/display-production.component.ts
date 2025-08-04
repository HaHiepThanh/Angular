import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {
  MatCard, MatCardActions, MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-display-production',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './display-production.component.html',
  styleUrl: './display-production.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayProductionComponent {

}
