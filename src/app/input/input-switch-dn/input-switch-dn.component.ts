import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-switch-dn',
  templateUrl: './input-switch-dn.component.html',
  styleUrls: ['./input-switch-dn.component.css']
})
export class InputSwitchDnComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
