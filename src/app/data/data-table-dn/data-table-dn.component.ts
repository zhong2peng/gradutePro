import { CarService } from './../data-grid-dn/Car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../carousel-dn/Car';

@Component({
  selector: 'app-data-table-dn',
  templateUrl: './data-table-dn.component.html',
  styleUrls: ['./data-table-dn.component.css'],
  providers:[CarService]
})
export class DataTableDnComponent implements OnInit {
  loading: boolean;

  cars: Car[];

  cols: any[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
        this.carService.getCarsLarge().then(cars => this.cars = cars);
        this.loading = false;
    }, 1000);

    this.cols = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];
  }

}
