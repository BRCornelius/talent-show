import { Injectable } from '@angular/core';
import { IEmployee } from 'src/app/cast/models';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TopicService } from './topic.service';
import { removeElementByKey, addElementByKey, setInactiveElements } from '../util/utilities';
import { TeamService } from 'src/app/team/services/team.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private topic: TopicService, private team: TeamService) { }

  activeEmployee: IEmployee;
  activeTeam: any;
  adminRoute: string;
  adminRoutes: string[] = ['Individual', 'Team'];
  requestResponse: string; // TODO Remove when live
  inputting: boolean;

  updateActiveEmployeeName: Function = ($event) => this.activeEmployee = JSON.parse($event.target.value);
  updateActiveTeam: Function = ($event) => this.activeTeam = JSON.parse($event.target.value);
  updateAdminRoute: Function = ($event) => this.adminRoute = $event.target.value;
  checkAdminRoute: Function = (route: string): boolean => this.adminRoute === route;
  sendRequest: Function = (requestObject): Subscription =>
    this.http.post('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/test-request', requestObject)
    .subscribe((res: any) => {
      this.requestResponse = res.body; // TODO Temove when live
      this.inputting = false;
    })
  getInactiveClients: Function = (employeeClients) => this.topic.clients
    ? setInactiveElements(this.topic.clients, employeeClients)
    : []
  updateActiveEmployeeClients: Function = (item, action) => {
    switch (action) {
      case false:
        addElementByKey(this.activeEmployee.inactiveClients, item, action);
        removeElementByKey(this.activeEmployee.client, item, action);
        break;
      case true:
        addElementByKey(this.activeEmployee.client, item, action);
        removeElementByKey(this.activeEmployee.inactiveClients, item, action);
        break;
      default:
        console.error(`default behavior for action ${action}`);
    }
  }
  updateActiveEmployeeSkills: Function = (item, action) => {
    switch (action) {
      case false:
        addElementByKey(this.activeEmployee.inactiveSkills, item, action);
        removeElementByKey(this.activeEmployee.skills, item, action);
        break;
      case true:
        addElementByKey(this.activeEmployee.skills, item, action);
        removeElementByKey(this.activeEmployee.inactiveSkills, item, action);
        break;
      default:
        console.error(`default behavior for action ${action}`);
    }
  }
}
