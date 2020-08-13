import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient, private admin: AdminService) { }

  employees: any[];

  getEmployees: Function = (): Subscription => this.http.get('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/get-employees')
    .subscribe((res: any) => {
      const response = [];
      res.data.forEach(item => {
        console.log(item.client)
        const inactiveClients = this.admin.getInactiveClients(item.client);
        response.push({
          ...item,
          inactiveClients
        })
      });
      this.employees = response;
      console.log(this.employees)
    });

}
