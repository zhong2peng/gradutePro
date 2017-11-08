import { SelectItem } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectbutton-dn',
  templateUrl: './selectbutton-dn.component.html',
  styleUrls: ['./selectbutton-dn.component.css']
})
export class SelectbuttonDnComponent implements OnInit {
  types: SelectItem[];

  selectedType: string;

  selectedTypes: string[] = ['Apartment', 'Studio'];
  constructor() {
    this.types = [];
    this.types.push({ label: 'Apartment', value: 'Apartment' });
    this.types.push({ label: 'House', value: 'House' });
    this.types.push({ label: 'Studio', value: 'Studio' });
  }

  ngOnInit() {
  }
  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
  }

}
