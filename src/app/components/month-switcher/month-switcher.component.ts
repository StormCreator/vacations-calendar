import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateServiceService } from '../../services/date-service/date-service.service';

@Component({
  selector: 'app-month-switcher',
  templateUrl: './month-switcher.component.html',
  styleUrls: ['./month-switcher.component.scss']
})
export class MonthSwitcherComponent implements OnInit, OnDestroy {
  currentDate: Date;
  constructor(private dateService: DateServiceService) { 
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.dateService.dateSubj.subscribe((date: Date) => {
      this.currentDate = date;
    });
  }

  ngOnDestroy(): void{
    this.dateService.dateSubj.unsubscribe();
  }

  public changeMonth(direction: number): void{
    this.dateService.changeCurrentDate(direction);
  }

}
