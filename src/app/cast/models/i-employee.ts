import { ITimeOff } from './i-time-off';

export interface IEmployee {
    client: any[];
    days: ITimeOff[];
    dept: string;
    email: string;
    hire: string;
    inactiveClients: any;
    inactiveSkills: any;
    inactiveTeams: any;
    name: string;
    permission: string;
    photo: string;
    projects: any[];
    skills: any[];
    super: string;
    team: string;
    title: string;
}
