import {Component, Input, OnInit} from '@angular/core';
import {FrameSales} from '../../../Models/frameSales.models';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame',
  imports: [
    MatIconModule
  ],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
})
export class FrameComponent implements OnInit {

  @Input() frameItemList!: FrameSales;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {}

  navigateToDetail(id:string){
    this.router.navigate(['/detail',id]).then();
  }

}
