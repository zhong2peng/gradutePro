import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  clicks: number = 0;
  msgs: Message[] = [];
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Update', icon: 'fa-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      },
      {
        label: 'Angular.io', icon: 'fa-link', command: () => {
          console.log("GG");
        }
      },
      {
        label: 'Theming', icon: 'fa-paint-brush', command: () => {
          console.log("GG");
        }
      }
    ];
  }

  count() {
    this.clicks++;
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
  }

}
