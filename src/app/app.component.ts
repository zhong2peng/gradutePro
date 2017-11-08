import { Component, OnInit } from '@angular/core';
import { flyIn } from './animations/fly-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [flyIn]
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }
  ngOnInit() { }
}
