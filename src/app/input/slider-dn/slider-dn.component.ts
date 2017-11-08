import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-dn',
  templateUrl: './slider-dn.component.html',
  styleUrls: ['./slider-dn.component.css']
})
export class SliderDnComponent implements OnInit {
  val1: number;

  val2: number = 50;

  val3: number;

  val4: number;

  val5: number;

  rangeValues: number[] = [20, 80];
  constructor() { }

  ngOnInit() {
  }

}
