import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputtext-dn',
  templateUrl: './inputtext-dn.component.html',
  styleUrls: ['./inputtext-dn.component.css']
})
export class InputtextDnComponent implements OnInit {
  text: string;
  disabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
