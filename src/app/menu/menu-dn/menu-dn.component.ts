import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dn',
  templateUrl: './menu-dn.component.html',
  styleUrls: ['./menu-dn.component.css']
})
export class MenuDnComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'fa-plus' },
        { label: 'Open', icon: 'fa-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa-refresh' },
        { label: 'Redo', icon: 'fa-repeat' }
      ]
    }];
  }

}
