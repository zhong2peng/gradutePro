import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-menu-module',
  templateUrl: './menu-module.component.html',
  styleUrls: ['./menu-module.component.css'],
  providers: [MessageService]
})
export class MenuModuleComponent implements OnInit {
  private items: MenuItem[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {
          label: 'New', icon: 'fa-plus', command: (event) => {
            console.log(event.originalEvent, "Browser event");
            console.log(event.item, "menuitem metadata");
          }
        },
        {
          label: 'Open', icon: 'fa-download'
          // , command: (event) => {
          //   console.log(event.originalEvent, "Browser event");
          //   console.log(event.item, "menuitem metadata");
          // }
          // , routerLink: ['/'], queryParams: { "recent": "true" } 
        }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa-refresh',url:'page'
        // ,routerLink: ['/a'], queryParams: { "recent": "true" }
      },
        { label: 'Redo', icon: 'fa-repeat',url:'#456'
        // ,routerLink: ['/aaa'], queryParams: { "recent": "true" } 
      }
      ]
    }];
  }

}
