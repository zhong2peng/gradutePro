// import { CarService } from './../data-grid-dn/Car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../carousel-dn/Car';

@Component({
  selector: 'app-data-scroller-dn',
  templateUrl: './data-scroller-dn.component.html',
  styleUrls: ['./data-scroller-dn.component.css']
  // providers: [CarService]
})
export class DataScrollerDnComponent implements OnInit {
  cars: Car[];

  selectedCar: Car;

  displayDialog: boolean;
  constructor(
    // private carService: CarService
  ) { }

  ngOnInit() {
    // this.carService.getCarsLarge().then(cars => this.cars = cars);
  }
  selectCar(car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedCar = null;
  }

}
