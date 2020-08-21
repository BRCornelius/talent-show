import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/admin/services/admin.service';
import { aggregateDaysInDevelopment, aggregateDaysOff } from '../util/utilities';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  startDate: Date;
  endDate: Date;
  developmentDays: number;

  showDates: Function = (daysOff) => {
    const startDate = this.startDate.setHours(0, 0, 0, 0);
    const endDate = this.endDate.setHours(0, 0, 0, 0);
    const daysOffArray = aggregateDaysOff(daysOff);
    this.developmentDays = aggregateDaysInDevelopment(startDate, endDate, daysOffArray);
  }
}
