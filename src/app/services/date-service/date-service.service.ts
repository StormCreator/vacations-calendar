import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { add, getDaysInMonth, setDate, isWeekend  } from 'date-fns';
import { Day } from 'src/app/models/day';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  currentDate: Date;
  public dateSubj = new BehaviorSubject<Date>(new Date());

  constructor() {
    this.currentDate = new Date();
  }

  public changeCurrentDate(direction: number): void{
    if(direction != 1 && direction != -1){
      return;
    }
    this.currentDate = add(this.currentDate, { months: direction });
    this.dateSubj.next(this.currentDate);
  }


}
