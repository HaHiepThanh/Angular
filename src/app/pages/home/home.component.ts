import { Component } from '@angular/core';
import {FrameSales} from '../../../Models/frameSales.models';
import {Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {FrameComponent} from '../../../Components/frame/frame.component';
import {MatIconModule} from '@angular/material/icon';
import {DirectoryComponent} from '../../../Components/directory/directory.component';

@Component({
  selector: 'app-home',
  imports: [
    FrameComponent,
    MatIconModule,
    DirectoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productHome:FrameSales[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {
    this.productHome = this.productService.frameDisplay;
    console.log(this.productHome);
  }

  addToCart(item: FrameSales) {
    this.productHome.push(item);
  }

}
