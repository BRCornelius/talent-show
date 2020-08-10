import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  constructor(public admin: AdminService) { }

  ngOnInit() {
    this.type = this.edit ? "Edit" : "Add";
  }

  @Input() edit: boolean;
  @Input() label: string;

  type: string;

  name: string;
  photo: string;

  showName: Function = () => {
    const submission = { name: this.admin.activeTeam.name };
    if(this.name) {
      Object.assign(submission, { name: this.name });
    };
    if(this.photo) {
      Object.assign(submission, { photo: this.photo });
    };
    // if(validateIndividualEntry(submission)) {
    //   console.log(this.name)
    //   console.log(this.admin.activeEmployee);
    // } else {
    //   console.error("That is an invalid entry!")
    // };
    this.admin.sendRequest(submission);
  };
}
