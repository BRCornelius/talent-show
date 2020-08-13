import { Injectable } from '@angular/core';
import { IEmployee } from 'src/app/cast/models';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private topic: TopicService) { }

  activeEmployee: IEmployee;
  activeTeam: any;
  adminRoute: string;
  adminRoutes: string[] = ['Individual', 'Team'];
  requestResponse: string;
  inputting: boolean;

  updateActiveEmployeeName: Function = ($event) => this.activeEmployee = JSON.parse($event.target.value);
  updateActiveTeam: Function = ($event) => this.activeTeam = JSON.parse($event.target.value);
  updateAdminRoute: Function = ($event) => this.adminRoute = $event.target.value;
  checkAdminRoute: Function = (route: string): boolean => this.adminRoute === route;
  sendRequest: Function = (requestObject): Subscription =>
    this.http.post('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/test-request', requestObject)
    .subscribe((res: any) => {
      this.requestResponse = res.body;
      this.inputting = false;
    });
  getInactiveClients: Function = (employeeClients) => {
    const results = this.topic.clients.filter(client => {
      if(client.name === Object.keys(employeeClients[0])[0]) {
        return false;
      } else {
        return true;
      }
    })
    console.log(results)
    return results;
  }
}
