import { Component, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';
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
    switch (this.title) {
      case 'Team':
        this.ind.team = $event.target.value;
        break;
      case 'Department':
        this.ind.dept = $event.target.value;
        break;
      default:
    }
  }

}
