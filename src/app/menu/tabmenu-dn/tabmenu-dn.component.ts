import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabmenu-dn',
  templateUrl: './tabmenu-dn.component.html',
  styleUrls: ['./tabmenu-dn.component.css']
})
export class TabmenuDnComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Stats', icon: 'fa-bar-chart' },
      { label: 'Calendar', icon: 'fa-calendar' },
      { label: 'Documentation', icon: 'fa-book' },
      { label: 'Support', icon: 'fa-support' },
      { label: 'Social', icon: 'fa-twitter' }
    ];
  }

}
