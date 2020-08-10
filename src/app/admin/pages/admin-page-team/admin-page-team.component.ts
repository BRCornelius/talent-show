import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/team/services/team.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-page-team',
  templateUrl: './admin-page-team.component.html',
  styleUrls: ['./admin-page-team.component.css']
})
export class AdminPageTeamComponent implements OnInit {

  constructor(public team: TeamService, public admin: AdminService) { }

  ngOnInit() {
    this.team.getTeams();
  }

}
