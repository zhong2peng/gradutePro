import { SelectItem } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { City } from '../dropdown-dn/city';

@Component({
  selector: 'app-listbox-dn',
  templateUrl: './listbox-dn.component.html',
  styleUrls: ['./listbox-dn.component.css']
})
export class ListboxDnComponent implements OnInit {
  cities: City[];

  selectedCity: City;

  selectedCities: City[];

  cars: SelectItem[];

  selectedCar: string = 'BMW';
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
  }

  ngOnInit() {

  }

}
