import {Component, Input, LOCALE_ID, OnInit} from '@angular/core';
import {FrameSales} from '../../Models/frameSales.models';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {DecimalPipe, registerLocaleData} from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);


@Component({
  selector: 'app-frame',
  imports: [
    MatIconModule,
    DecimalPipe
  ],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ]
})
export class FrameComponent implements OnInit {

  @Input() frameItemList!: FrameSales;

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {
  }

  ngOnInit() {}

  navigateToDetail(id:string){
    this.router.navigate(['/detail',id]).then();
  }

  addToCart(id:string){
    this.productService.addProductToCart(id);
  }

}
