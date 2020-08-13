import { Component } from '@angular/core';
import { CastService } from 'src/app/cast/services/cast.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-page-individual',
  templateUrl: './admin-page-individual.component.html',
  styleUrls: ['./admin-page-individual.component.css']
})
export class AdminPageIndividualComponent {

  constructor(public cast: CastService, public admin: AdminService) {
    this.cast.getEmployees();
  }

}
