import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FrameComponent} from './frame/frame.component';
import {FrameSales} from '../../Models/frameSales.models';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-display-production',
  imports: [
    FrameComponent,
    MatIconModule
  ],
  templateUrl: './display-production.component.html',
  styleUrl: './display-production.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayProductionComponent {
  //
  // @Output() addToCartEvent = new EventEmitter<FrameSales>()
  //
  // addItem(newItem: FrameSales) {
  //   this.addToCartEvent.emit(newItem);
  // }

  frameList : FrameSales[] = [];

  constructor(
    private router:Router,
    private productService: ProductService,
  ) {
    this.frameList = this.productService.frameDisplay;
    console.log(this.frameList);
  }

}
