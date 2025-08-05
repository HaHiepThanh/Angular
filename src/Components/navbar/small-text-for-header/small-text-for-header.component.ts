import {Component, Input, OnInit} from '@angular/core';
import {topNavbar} from '../../../Models/topNavbar.model';

@Component({
  selector: 'app-small-text-for-header',
  imports: [
  ],
  templateUrl: './small-text-for-header.component.html',
  styleUrl: './small-text-for-header.component.scss'
})
export class SmallTextForHeaderComponent implements OnInit {

  @Input() text!: topNavbar;

  constructor() {
  }

  ngOnInit(): void {
    }
}
