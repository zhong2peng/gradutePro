import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-dn',
  templateUrl: './spinner-dn.component.html',
  styleUrls: ['./spinner-dn.component.css']
})
export class SpinnerDnComponent implements OnInit {
  val1: number;

  val2: number;

  val3: number;

  val4: number = 100;
  constructor() { }

  ngOnInit() {
  }

}
