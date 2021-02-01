import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vacation } from 'src/app/models/vacation';

@Injectable({
  providedIn: 'root'
})
export class VacationsService {

  private vacations: Vacation[] = [ 
    {
      startDate: new Date(2021, 1, 20),
      endDate: new Date(2021, 1, 22),
      userId: 1,
      type: 'paid',
    },
    {
      startDate: new Date(2021, 1, 6),
      endDate: new Date(2021, 1, 13),
      userId: 2,
      type: 'paid',
    },
    {
      startDate:  new Date(2021, 1, 21),
      endDate: new Date(2021, 1, 25),
      userId: 3,
      type: 'paid',
    },
    {
      startDate: new Date(2021, 1, 1),
      endDate: new Date(2021, 1, 3),
      userId: 4,
      type: 'paid',
    },
    {
      startDate: new Date(2021, 1, 1),
      endDate: new Date(2021, 1, 11),
      userId: 5,
      type: 'paid',
    },
    {
      startDate: new Date(2021, 1, 20),
      endDate: new Date(2021, 1, 31),
      userId: 5,
      type: 'paid',
    },
    {
      startDate: new Date(2021, 1, 8),
      endDate: new Date(2021, 1, 11),
      userId: 6,
      type: 'paid',
    },
    {
      startDate: new Date(2021, 1, 8),
      endDate: new Date(2021, 1, 11),
      userId: 6,
      type: 'paid',
    }
  ]

  constructor() {

  }

  public getVacations(): Observable<Vacation[]> {
    return of(this.vacations);
  }
}
