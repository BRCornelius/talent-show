import { Injectable } from '@angular/core';
import { aggregateDaysInDevelopment, aggregateDaysOff, aggregateTeamDaysOff, aggregateTeamDaysInDevelopment } from '../util/utilities';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  startDate: Date;
  endDate: Date;
  developmentDays: number;
  teamDaysOffArray: any[];

  getTeamDaysOff: Function = (teamMembers) => {
    this.teamDaysOffArray = aggregateTeamDaysOff(teamMembers);
  }

  showDates: Function = (daysOff, type, teamMemberCount: number) => {
    const startDate = this.startDate.setHours(0, 0, 0, 0);
    const endDate = this.endDate.setHours(0, 0, 0, 0);
    let daysOffArray;
    switch (type) {
      case 'cast':
        daysOffArray = aggregateDaysOff(daysOff);
        this.developmentDays = aggregateDaysInDevelopment(startDate, endDate, daysOffArray);
        break;
      case 'teams':
        this.developmentDays = aggregateTeamDaysInDevelopment(startDate, endDate, this.teamDaysOffArray, teamMemberCount);
        break;
      default:
    }
  }
}
