import { Component, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { adminSelect } from '../../animations/admin-select';

@Component({
  selector: 'admin-select',
  templateUrl: './admin-select.component.html',
  styleUrls: ['./admin-select.component.css'],
  animations: [adminSelect]
})
export class AdminSelectComponent {

  constructor(public admin: AdminService) { }

  @Input() items: any[];
  @Input() label: string;

  toggled = false;
  toggleMenu: Function = () => this.toggled = !this.toggled;
  stringifyItemToPass: Function = (item): any => JSON.stringify(item);
  updateActiveItem: Function = ($event): void => {
    switch (this.label) {
      case 'Team':
        this.admin.updateActiveTeam($event);
        break;
      default:
        this.admin.updateActiveEmployeeName($event);
    }
    this.toggled = false;
  }
}
