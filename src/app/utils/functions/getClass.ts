import { Day } from "src/app/models/day";
import { VacationList } from "src/app/models/vacationList";
import { isVacationDay, matchVacationDay, getVacationDays, isVacationStart, isVacationEnd } from '../../utils/functions/vacationSearch';

export const getClass = (day: Day, vacationList: VacationList[], userId: number): string => {
    console.log(day);
    let classString = '';
    if(day.isWeekend){
        classString += 'weekend'
    }
    if(isVacationDay(day, vacationList, userId)){
        classString += ' vacation';
    }
    if(isVacationStart(day, vacationList, userId)){
        classString += ' vacation-start';
    }
    if(isVacationEnd(day, vacationList, userId)){
        classString += ' vacation-end';
    }
    return classString;
}