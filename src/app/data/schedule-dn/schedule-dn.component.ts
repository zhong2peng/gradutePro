import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-schedule-dn',
  templateUrl: './schedule-dn.component.html',
  styleUrls: ['./schedule-dn.component.css'],
  providers: [EventService]
})
export class ScheduleDnComponent implements OnInit {
  events: any[];

  header: any;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().then(events => { this.events = events; });

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

}
