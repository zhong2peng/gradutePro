import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-dn',
  templateUrl: './checkbox-dn.component.html',
  styleUrls: ['./checkbox-dn.component.css']
})
export class CheckboxDnComponent implements OnInit {

  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
