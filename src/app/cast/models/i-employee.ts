import { ITimeOff } from './i-time-off';

export interface IEmployee {
    clients: string[][];
    days: ITimeOff[];
    dept: string;
    email: string;
    hire: string;
    name: string;
    permission: string;
    photo: string;
    projects: string[][];
    skills: string[][];
    super: string;
    team: string;
    title: string;
}
