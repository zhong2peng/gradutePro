import { CarService } from './../data-grid-dn/Car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../carousel-dn/Car';

@Component({
  selector: 'app-orderlist-dn',
  templateUrl: './orderlist-dn.component.html',
  styleUrls: ['./orderlist-dn.component.css'],
  providers:[CarService]
})
export class OrderlistDnComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);
  }

}
