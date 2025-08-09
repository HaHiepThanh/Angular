import { Component } from '@angular/core';
import {InformationButtonComponent} from './information-button/information-button.component';
import {SelectionDownArrowComponent} from './selection-down-arrow/selection-down-arrow.component';

@Component({
  selector: 'app-directory',
  imports: [
    InformationButtonComponent,
    SelectionDownArrowComponent,
  ],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.scss'
})
export class DirectoryComponent {


}
