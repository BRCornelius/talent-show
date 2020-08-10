import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-individual-form',
  templateUrl: './individual-form.component.html',
  styleUrls: ['./individual-form.component.css'],
})
export class IndividualFormComponent implements OnInit {

  constructor(public admin: AdminService) { }

  ngOnInit() {
    this.type = this.edit ? "Edit" : "Add";
  }

  @Input() edit: boolean;

  type: string;

  client: string[][];
  dept: string;
  email: string;
  hire: string;
  name: string;
  permission: string;
  photo: string;
  projects: string[][];
  skills: string[][];
  super: string;
  team: string;
  title: string;

  isFormReady: boolean;


  showName: Function = () => {
    const submission = { name: this.admin.activeEmployee.name }
    if(this.name) {
      Object.assign(submission, { name: this.name });
    }
    if(this.photo) {
      Object.assign(submission, { photo: this.photo });
    };
    if(this.dept) {
      Object.assign(submission, { dept: this.dept.toLowerCase() });
    };
    if(this.email) {
      Object.assign(submission, { email: this.email });
    };
    if(this.title) {
      Object.assign(submission, { title: this.title });
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
