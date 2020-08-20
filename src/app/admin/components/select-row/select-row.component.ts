import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from 'src/app/team/services/team.service';
import { AdminService } from '../../services/admin.service';
import { getInactiveTeams } from '../../util/utilities';

@Component({
  selector: 'admin-select-row',
  templateUrl: './select-row.component.html',
  styleUrls: ['./select-row.component.css']
})
export class SelectRowComponent {

  constructor(public admin: AdminService) {}

  @Input() title: string;

}
