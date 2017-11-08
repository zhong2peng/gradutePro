import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-dn',
  templateUrl: './breadcrumb-dn.component.html',
  styleUrls: ['./breadcrumb-dn.component.css']
})
export class BreadcrumbDnComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      { label: 'Lionel Messi', url: '#' }
    ];

    this.home = { icon: 'fa fa-home' };
  }

}
