import { Component, OnInit, Input } from '@angular/core';
import { Day } from 'src/app/models/day';
import { Vacation } from 'src/app/models/vacation';
import { VacationList } from 'src/app/models/vacationList';
import { VacationsService } from 'src/app/services/vacations/vacations.service';
import { setVacationToUser } from 'src/app/utils/functions/setVacations';
import { User } from '../../models/user';
import { UsersService } from '../../services/users/users.service';
import { getUsersForTeam } from '../../utils/functions/setTeams';

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
    this.users = [];
    this.teamName = '';
    this.daysInMonth = [];
    this.vacationList = [];
    this.isHide = false;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[])=>{  // вынести в отдельный метод!
      this.users = getUsersForTeam(this.teamName, users);
    });
    this.vacationService.getVacations().subscribe((vacations: Vacation[]) => {
      this.vacationList = setVacationToUser(this.users, vacations);
    })
    console.log(this.vacationList);
  }

  ngOnDestroy(){

  }

  public toggleHiding(): void{
    this.isHide = !this.isHide;
  }

  public getHideStatus():boolean{
    return this.isHide;
  }
  
  // getUsersSubscribe(): void{ 
    
  // }

}
