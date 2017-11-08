import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ContryDnService {

    constructor(private http: Http) { }
    getCountries() {
        return this.http.get('dn_data/contries.json')
            .toPromise()
            .then(res => <any[]>res.json().data)
            .then(data => { return data; });
    }
}