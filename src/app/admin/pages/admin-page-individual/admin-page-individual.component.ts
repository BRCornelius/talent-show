import { Component, OnInit } from '@angular/core';
import { CastService } from 'src/app/cast/services/cast.service';

@Component({
  selector: 'admin-page-individual',
  templateUrl: './admin-page-individual.component.html',
  styleUrls: ['./admin-page-individual.component.css']
})
export class AdminPageIndividualComponent implements OnInit {

  constructor(public cast: CastService) { }

  ngOnInit() {
    this.cast.getEmployees();
  }

}
