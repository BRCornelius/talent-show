import { Component, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-select',
  templateUrl: './admin-select.component.html',
  styleUrls: ['./admin-select.component.css']
})
export class AdminSelectComponent {

  constructor(public admin: AdminService) { }

  @Input() items: any[];
  @Input() label: string;

  toggled: boolean = false;
  toggleMenu: Function = () => this.toggled = !this.toggled;
  stringifyItemToPass: Function = (item): any => JSON.stringify(item);
  updateActiveItem: Function = ($event): void => {
    switch(this.label) {
      case "Team":
        this.admin.updateActiveTeam($event);
        break;
      default:
        this.admin.updateActiveEmployeeName($event);
    }
  }
}
