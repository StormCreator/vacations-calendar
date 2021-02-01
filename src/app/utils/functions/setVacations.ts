import { eachDayOfInterval } from 'date-fns';
import { User } from 'src/app/models/user';
import { Vacation } from 'src/app/models/vacation';
import { VacationList } from 'src/app/models/vacationList';

export const setVacationsToUser = (vacations: Vacation[], users: User[]): VacationList[] => {
    const vacationList: VacationList[] = [];
    users.forEach(user => {
        const vacationDays: Vacation[] = [];
        vacations.forEach(vacation => {
            if(user.id != vacation.userId){
                return;
            }
            vacationDays.push(vacation);
        });
        vacationList.push({
            userId: user.id,
            vacations: vacationDays 
        })
    });
    return vacationList;
}
