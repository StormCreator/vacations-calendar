import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/day';
import { User } from 'src/app/models/user';
import { VacationList } from 'src/app/models/vacationList';
import { UsersService } from '../../services/users/users.service';
import { getUsersForTeam } from '../../utils/functions/setTeams';
import { VacationsService } from '../../services/vacations/vacations.service';
import { Vacation } from 'src/app/models/vacation';
import { setVacationsToUser } from 'src/app/utils/functions/setVacations';
import { isVacationDay, isVacationStart } from 'src/app/utils/functions/vacationSearch';
import { getClass } from 'src/app/utils/functions/getClass';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  users: User[];
  vacationList: VacationList[];
  isHide: boolean;
  @Input() teamName: string;
  @Input() daysInMonth: Day[];

  constructor(private userService: UsersService, private vacationService: VacationsService) { 
    this.teamName = '';
    this.daysInMonth = [];
    this.users = [];
    this.isHide = false;
    this.vacationList = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[])=>{  // вынести в отдельный метод!
      this.users = getUsersForTeam(this.teamName, users);
    });
    this.vacationService.getVacations().subscribe((vacations: Vacation[]) => {
      this.vacationList = setVacationsToUser(vacations, this.users);
    });
  }

  public toggleHiding(): void{
    this.isHide = !this.isHide;
  }

  public getHideStatus():boolean{
    return this.isHide;
  }

  public isVacationDay(day: Day, userId: number): boolean{
    return isVacationDay(day, this.vacationList, userId);
  }

  public isVacationStart(day: Day, userId: number): boolean {
    return isVacationStart(day, this.vacationList, userId);
  }

  public getClass(day: Day, userId: number): string{
    console.log(day);
    return getClass(day, this.vacationList, userId);
  }

}
