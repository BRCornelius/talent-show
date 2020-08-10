import { Component, OnInit } from '@angular/core';
import { CastService } from 'src/app/cast/services/cast.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-page-individual',
  templateUrl: './admin-page-individual.component.html',
  styleUrls: ['./admin-page-individual.component.css']
})
export class AdminPageIndividualComponent implements OnInit {

  constructor(public cast: CastService, public admin: AdminService) { }

  ngOnInit() {
    this.cast.getEmployees();
  }

}
