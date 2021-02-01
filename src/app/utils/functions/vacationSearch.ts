import { Day } from "src/app/models/day";
import { VacationList } from "src/app/models/vacationList";
import {isSameDay, eachDayOfInterval, isWeekend} from 'date-fns';
import { Vacation } from "src/app/models/vacation";


export const getVacationDays = (vacations: Vacation[], userId: number): Date[] => {
    let vacationDays: Date[] = [];
    vacations.forEach(vacation => {
        if(vacation.userId != userId){
            return;
        }
        const { startDate, endDate } = vacation;
        eachDayOfInterval({start: startDate, end: endDate}).map(day => {
            vacationDays.push(day);
        });
    });
    return vacationDays;
}

export const matchVacationDay = (day: Day, vacationDays: Date[]): boolean  => {
    let isMatch = false;
    vacationDays.forEach(vacation => {
        if(isSameDay(day.date, vacation)){
            isMatch = true;
        }
    });
    return isMatch;
}

export const isVacationDay = (day: Day, vacationList: VacationList[], userId: number): boolean => {
    let isVacation: boolean = false;
    vacationList.forEach(vacation => {
        const { vacations } = vacation;
        const vacationDays: Date[] = getVacationDays(vacations, userId);
        if(vacation.userId != userId){
            return;
        }
        if(matchVacationDay(day, vacationDays)){
            isVacation = true;
        }

    });
    return isVacation;
}



export const isVacationStart = (day: Day, vacationList: VacationList[], userId: number): boolean => {
    let isVacationStart = false;

    vacationList.forEach(vacation => {
        const { vacations } = vacation;
        const vacationDays: Date[] = getVacationDays(vacations, userId);
        if(userId != vacation.userId){
            return;
        }
        vacations.forEach(vacation => {
            if(isSameDay(vacation.startDate, day.date)){
                isVacationStart = true;
            }
        })
    });
    return isVacationStart;
}


export const isVacationEnd = (day: Day, vacationList: VacationList[], userId: number): boolean => {
    let isVacationEnd = false;

    vacationList.forEach(vacation => {
        const { vacations } = vacation;
        const vacationDays: Date[] = getVacationDays(vacations, userId);
        if(userId != vacation.userId){
            return;
        }
        vacations.forEach(vacation => {
            if(isSameDay(vacation.endDate, day.date)){
                isVacationEnd = true;
            }
        })
    });

    return isVacationEnd;
}

// export const getVacationQuantity = (userId: number, vacationList: VacationList[]): number => {
//     const currentMonth = new Date().getMonth();
//     const currentYear = new Date().getFullYear();
//     let quantity = 0;
//     vacationList.forEach(vacationList => {
//         const { vacations } = vacationList;
//         if(userId != vacationList.userId){
//             return;
//         }

//         vacations.forEach(vacation => {
//             const { startDate, endDate } = vacation;
//             const vacationDays = eachDayOfInterval({start: startDate, end: endDate});
//             vacationDays.forEach(vacationDay => {
//                 if(vacationDay.getMonth() === currentMonth && vacationDay.getFullYear() === currentYear && !isWeekend(vacationDay)){
//                     quantity += 1;
//                 }
//             });
//         })
//     });

//     return quantity;
// }  

// export const isVacationCenter = (day: Day, vacationList: VacationList[], userId: number): boolean => {
//     let isCenter = false;
//     vacationList.forEach(vacationList => {
//         if(userId != vacationList.userId){
//             return;
//         }
//         const { vacations } = vacationList;
//         vacations.forEach(vacation => {
//             const { startDate, endDate } = vacation;
//             const vacationDays = eachDayOfInterval({start: startDate, end: endDate});
//             const vacationsCenter = vacationDays.length % 2; // 1
//             // console.log(vacationDays.length);
//             // console.log(vacationsCenter);
//             vacationDays.forEach((vacationDay, index) => {
//                 if(!isSameDay(day.date, vacationDay)){
//                     return;
//                 }
//                 if(index === vacationsCenter){
//                     isCenter = true;
//                     console.log('trueda');
//                 }
//             });
//         });
//     });


//     return isCenter;
// }