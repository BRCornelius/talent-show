import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/services/admin.service';
import { addInactiveElements } from '../util/utilities';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient, private admin: AdminService) { }

  employees: any[];

  getEmployees: Function = (): Subscription => this.http.get('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/get-employees')
    .subscribe((res: any) => {
      const response = [];
      addInactiveElements(res.data, response, this.admin.getInactiveClients, this.admin.getInactiveSkills, this.admin.getInactiveTeams);
      this.employees = response;
    });
}
