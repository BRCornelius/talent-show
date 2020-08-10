import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(public admin: AdminService) { }

}
