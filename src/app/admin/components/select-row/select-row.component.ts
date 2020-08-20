import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from 'src/app/team/services/team.service';
import { AdminService } from '../../services/admin.service';
import { getInactiveTeams } from '../../util/utilities';
import { IndividualService } from '../../services/individual.service';

@Component({
  selector: 'admin-select-row',
  templateUrl: './select-row.component.html',
  styleUrls: ['./select-row.component.css']
})
export class SelectRowComponent {

  constructor(public admin: AdminService, private ind: IndividualService) {}

  @Input() title: string;

  handleValueSelect: Function = ($event) => {
    this.ind.team = $event.target.value
  };

}
