import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  constructor(public admin: AdminService) { }

  ngOnInit() {
  }

  @Input() edit: boolean;
  @Input() label: string;

}
