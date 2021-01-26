import { User } from 'src/app/models/user';
import { Vacation } from 'src/app/models/vacation';
import { VacationList } from 'src/app/models/vacationList';

export const setVacationToUser = (users: User[], vacations: Vacation[]): VacationList[] => {
    const vacationList: VacationList[] = [];
    users.forEach(user => {
        const userVacations: Vacation[] = [];
        vacations.forEach(vacation => {
            if(user.id != vacation.userId){
                return;
            }
            userVacations.push(vacation);
        });
        vacationList.push({
            userId: user.id,
            vacations: userVacations
        });
    })
    return vacationList;
}