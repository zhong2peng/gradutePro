import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-use-button',
  templateUrl: './multi-use-button.component.html',
  styleUrls: ['./multi-use-button.component.css']
})
export class MultiUseButtonComponent implements OnInit {
  value: any;
  checked1: boolean = false;

  checked2: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
