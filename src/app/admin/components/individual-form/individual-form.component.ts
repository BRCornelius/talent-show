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
    const submission = {
      name: this.name,
      photo: this.photo,
      dept: this.dept,
      email: this.email,
      title: this.title
    }
    // if(validateIndividualEntry(submission)) {
    //   console.log(this.name)
    //   console.log(this.admin.activeEmployee);
    // } else {
    //   console.error("That is an invalid entry!")
    // };
    console.log(JSON.stringify(submission))
  };
}
