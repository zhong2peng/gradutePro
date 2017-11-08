import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-dn',
  templateUrl: './rating-dn.component.html',
  styleUrls: ['./rating-dn.component.css']
})
export class RatingDnComponent implements OnInit {
  val1: number;

  val2: number = 5;

  val3: number;

  val4: number = 5;

  val5: number;

  msg: string; F
  constructor() { }

  ngOnInit() {
  }
  handleRate(event) {
    this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
    this.msg = "Rating Cancelled";
  }
}
