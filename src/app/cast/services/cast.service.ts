import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  employees: any[];

  getEmployees: Function = (): Subscription => this.http.get('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/get-employees')
    .subscribe((res: any) => { this.employees = res.data; console.log(res.data) });

}
