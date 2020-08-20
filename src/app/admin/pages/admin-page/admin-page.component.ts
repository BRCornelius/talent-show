import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { TopicService } from '../../services/topic.service';
import { TeamService } from 'src/app/team/services/team.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(
    public admin: AdminService,
    private team: TeamService,
    private topic: TopicService
  ) {
    this.admin.inputting = true;
    this.topic.getClients();
    this.topic.getSkills();
    this.topic.getDepartments();
    this.team.getTeams();
  }

}
