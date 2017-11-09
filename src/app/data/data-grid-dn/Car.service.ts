import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Car } from '../carousel-dn/Car';

@Injectable()
export class CarService {

    constructor(private http: Http) { }
    getCarsLarge(){
        return this.http.get('dn_data/cars.json')
        .toPromise()
        .then(res => <Car[]> res.json().data)
        .then(data => { return data; });
    }
}