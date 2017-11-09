import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { Car } from './Car';

@Component({
  selector: 'app-carousel-dn',
  templateUrl: './carousel-dn.component.html',
  styleUrls: ['./carousel-dn.component.css']
})
export class CarouselDnComponent implements OnInit {
  cars: Car[];

  msgs: Message[];
  constructor() {
    this.msgs = [];
    this.cars = [
      { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
      { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
      { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
      { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
      { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
      { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
      { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
      { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
      { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
    ];
  }

  ngOnInit() {
  }
  selectCar(car: Car) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
  }
}
