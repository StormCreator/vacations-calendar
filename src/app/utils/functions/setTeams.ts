import { User } from '../../models/user';
import { teamsName } from '../../models/enums/teamsName';
import { Team } from '../../models/team';

export const setTeams = () : Team[] => {
    const teams: Team[] = [];
    for(let key in teamsName){
        teams.push({
            realm: <teamsName>key,
            participants: []
        });
    }
    return teams;
}


export const getUsersForTeam = (teamName: string, users: User[]): User[] => {
    return users.filter(user => user.realm === teamName);
}