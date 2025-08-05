import {Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {button2Model} from '../../../../Models/button2.models';

@Component({
  selector: 'app-button2',
  imports: [
    MatIconModule
  ],
  templateUrl: './button2.component.html',
  styleUrl: './button2.component.scss'
})
export class Button2Component implements OnInit {
  @Input() buttonsItem!: button2Model;
  constructor() {
  }
  ngOnInit() {}
}
