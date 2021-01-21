import { Component, OnInit } from '@angular/core';
import { isWeekend, setDate, getDaysInMonth } from 'date-fns';
import { Day } from 'src/app/models/day';
import { DateServiceService } from '../../services/date-service/date-service.service';
import { UsersService } from '../../services/users/users.service';
import { teamsName } from '../../models/enums/teamsName';
import { User } from '../../models/user';
import { Team } from '../../models/team';
import { setTeams } from '../../utils/functions/setTeams';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})

export class TableLayoutComponent implements OnInit {
  daysInMonth: Day[];
  currentDate: Date;
  teams: Team[];


  constructor(private dateService: DateServiceService) { 
    this.daysInMonth = [];
    this.teams = setTeams();
    this.currentDate = new Date();
  }

  ngOnInit(): void {  
    this.dateService.dateSubj.subscribe((date: Date) => {
      this.currentDate = date;
      this.daysInMonth = this.setDaysInMonth();
    });
  }

  setDaysInMonth(): Day[]{
    const newMonthDays: Day[] = [];
    for(let i = 1; i <= getDaysInMonth(this.currentDate); i++ ){
      const dayOfMonth = setDate(this.currentDate, i)
      newMonthDays.push({
        date: dayOfMonth,
        isWeekend: isWeekend(dayOfMonth)
      });
    }
    return newMonthDays;
  }

  

}
