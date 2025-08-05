import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FrameSales} from '../../../Models/frameSales.models';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-frame',
  imports: [
    MatIconModule
  ],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
})
export class FrameComponent implements OnInit {

  @Input() frameItem!: FrameSales;

  @Output() addToCartEvent = new EventEmitter<FrameSales>();

  addToCart(item: FrameSales) {
    console.log(item);
    this.addToCartEvent.emit(item);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
