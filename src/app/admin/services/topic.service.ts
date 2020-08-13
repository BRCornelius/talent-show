import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  clients: any;
  getClients: Function = (): Subscription => this.http.get('https://vk55jlt9x8.execute-api.us-east-1.amazonaws.com/beta/get-clients')
    .subscribe((res: any) => this.clients = res.data);
}
