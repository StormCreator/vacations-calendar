import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { teamsName } from '../../models/enums/teamsName';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'FE_User_1',
      email: 'someemail.com',
      realm: teamsName.Frontend,
    },
    {
      id: 2,
      name: 'FE_User_2',
      email: 'someemail.com',
      realm: teamsName.Frontend,
    },
    {
      id: 3,
      name: 'FE_User_3',
      email: 'someemail.com',
      realm: teamsName.Frontend,
    },
    {
      id: 4,
      name: 'BA_User_1',
      email: 'someemail.com',
      realm: teamsName.Backend,
    },
    {
      id: 5,
      name: 'BA_User_2',
      email: 'someemail.com',
      realm: teamsName.Backend,
    },
    {
      id: 6,
      name: 'DS_User_1',
      email: 'someemail.com',
      realm: teamsName.Designers,
    },

  ];

  getUsers(): Observable<User[]> {
    return new Observable(sub => {
        sub.next(this.users);
      });
  }
}
