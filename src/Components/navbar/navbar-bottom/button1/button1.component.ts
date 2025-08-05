import {Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {button1Model} from '../../../../Models/button1.model';

@Component({
  selector: 'app-button1',
  imports: [
    MatIconModule
  ],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.scss'
})
export class Button1Component implements OnInit {

  @Input() button1Item!: button1Model;
  constructor() {

  }

  ngOnInit() {

  }

}
