import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { IndividualService } from '../../services/individual.service';

@Component({
  selector: 'admin-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['./input-row.component.css']
})
export class InputRowComponent {

  constructor(public admin: AdminService, public ind: IndividualService) { }

  @Input() edit: boolean;
  @Input() title: string;

}
