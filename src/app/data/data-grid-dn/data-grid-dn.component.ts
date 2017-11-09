import { CarService } from './Car.service';
import { Car } from './../carousel-dn/Car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid-dn',
  templateUrl: './data-grid-dn.component.html',
  styleUrls: ['./data-grid-dn.component.css'],
  providers:[CarService]
})
export class DataGridDnComponent implements OnInit {
  cars: Car[];

  selectedCar: Car;

  displayDialog: boolean;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);
  }
  selectCar(car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedCar = null;
  }

}
