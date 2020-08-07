import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  teams: any[];

  getTeams: Function = (): Subscription => this.http.get('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/get-teams')
    .subscribe((res: any) => this.teams = res.data)
}
