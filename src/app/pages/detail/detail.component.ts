import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ProductDetailComponent} from '../../../Components/product-detail/product-detail.component';

@Component({
  selector: 'app-detail',
  imports: [
    MatIconModule,
    ProductDetailComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {

}
