import { Component, OnInit } from '@angular/core';
import { Car } from '../carousel-dn/Car';
import { CarService } from '../data-grid-dn/Car.service';

@Component({
  selector: 'app-data-list-dn',
  templateUrl: './data-list-dn.component.html',
  styleUrls: ['./data-list-dn.component.css'],
  providers:[CarService]
})
export class DataListDnComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);
  }

}
