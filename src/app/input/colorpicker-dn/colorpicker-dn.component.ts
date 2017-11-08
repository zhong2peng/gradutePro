import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpicker-dn',
  templateUrl: './colorpicker-dn.component.html',
  styleUrls: ['./colorpicker-dn.component.css']
})
export class ColorpickerDnComponent implements OnInit {
  color1: string;

  color2: string = '#1976D2';
  constructor() { }

  ngOnInit() {
  }

}
