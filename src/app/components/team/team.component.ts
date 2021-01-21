import { Component, OnInit, Input } from '@angular/core';
import { Day } from 'src/app/models/day';
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
  @Input() teamName: string;
  @Input() daysInMonth: Day[];

  constructor(private userService: UsersService) {
    this.users = [];
    this.teamName = '';
    this.daysInMonth = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[])=>{  // вынести в отдельный метод!
      this.users = getUsersForTeam(this.teamName, users);
    });
    console.log(this.users);
    console.log(this.daysInMonth);
  }

  ngOnDestroy(){

  }
  
  // getUsersSubscribe(): void{ 
    
  // }

}
