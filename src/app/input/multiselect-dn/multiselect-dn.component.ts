import { Component, OnInit } from '@angular/core';
import { SelectItem } from '_primeng@4.3.0@primeng/primeng';

@Component({
  selector: 'app-multiselect-dn',
  templateUrl: './multiselect-dn.component.html',
  styleUrls: ['./multiselect-dn.component.css']
})
export class MultiselectDnComponent implements OnInit {
  cars: SelectItem[];

  selectedCars1: string[] = [];

  selectedCars2: string[] = [];
  constructor() {
    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

  ngOnInit() {
  }

}
