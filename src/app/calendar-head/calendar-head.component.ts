import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../models/day';

@Component({
  selector: 'app-calendar-head',
  templateUrl: './calendar-head.component.html',
  styleUrls: ['./calendar-head.component.scss']
})
export class CalendarHeadComponent implements OnInit {

  @Input() daysInMonth: Day[];

  constructor() {
    this.daysInMonth = [];
  }

  ngOnInit(): void {
    
  }

}
