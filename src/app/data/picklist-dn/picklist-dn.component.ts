import { CarService } from './../data-grid-dn/Car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../carousel-dn/Car';

@Component({
  selector: 'app-picklist-dn',
  templateUrl: './picklist-dn.component.html',
  styleUrls: ['./picklist-dn.component.css'],
  providers:[CarService]
})
export class PicklistDnComponent implements OnInit {
  sourceCars: Car[];

  targetCars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.sourceCars = cars);
    this.targetCars = [];
  }

}
