import { Component, OnInit } from '@angular/core';
import { CastService } from '../services/cast.service';
import { TopicService } from 'src/app/admin/services/topic.service';

@Component({
  selector: 'cast-page',
  templateUrl: './cast-page.component.html',
  styleUrls: ['./cast-page.component.css']
})
export class CastPageComponent implements OnInit {

  constructor(public cast: CastService, public topic: TopicService) { }

  ngOnInit() {
    this.cast.getEmployees();
    this.topic.getClients();
    this.topic.getSkills();
  }

}
