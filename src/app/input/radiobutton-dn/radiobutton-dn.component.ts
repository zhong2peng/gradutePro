import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton-dn',
  templateUrl: './radiobutton-dn.component.html',
  styleUrls: ['./radiobutton-dn.component.css']
})
export class RadiobuttonDnComponent implements OnInit {
  val1: string;

  val2: string = 'Option 2';
  constructor() { }

  ngOnInit() {
  }

}
