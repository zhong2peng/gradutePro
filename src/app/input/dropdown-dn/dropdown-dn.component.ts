import { City } from './city';
import { SelectItem } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-dn',
  templateUrl: './dropdown-dn.component.html',
  styleUrls: ['./dropdown-dn.component.css']
})
export class DropdownDnComponent implements OnInit {
  cities: City[];

  selectedCity: City;

  cars: SelectItem[];

  selectedCar: string;

  selectedCar2: string = 'BMW';

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

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
    this.selectedCity = { name: 'New York', code: 'NY' };
  }

  ngOnInit() {
  }

}
