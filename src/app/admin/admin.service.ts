import { Injectable } from '@angular/core';
import { INavLink } from 'src/app/core/models';
import { IEmployee } from 'src/app/cast/models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  activeEmployee: IEmployee;
  adminRoute: string;
  adminRoutes: string[] = ['Individual', 'Team'];

  updateActiveEmployeeName: Function = ($event) => this.activeEmployee = JSON.parse($event.target.value);
  updateAdminRoute: Function = ($event) => this.adminRoute = $event.target.value;

}
