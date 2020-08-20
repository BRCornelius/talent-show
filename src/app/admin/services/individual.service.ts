import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  constructor(private admin: AdminService) { }

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

  showName: Function = () => {
    const submission = { name: this.admin.activeEmployee.name };
    if (this.name) {
      Object.assign(submission, { name: this.name });
    }
    if (this.photo) {
      Object.assign(submission, { photo: this.photo });
    }
    if (this.dept) {
      Object.assign(submission, { dept: this.dept.toLowerCase() });
    }
    if (this.email) {
      Object.assign(submission, { email: this.email });
    }
    if (this.title) {
      Object.assign(submission, { title: this.title });
    }
    if (this.team) {
      Object.assign(submission, { team: this.team });
    }
    Object.assign(submission, { client: this.admin.activeEmployee.client });
    Object.assign(submission, { skills: this.admin.activeEmployee.skills });
    // if(validateIndividualEntry(submission)) {
    //   console.log(this.name)
    //   console.log(this.admin.activeEmployee);
    // } else {
    //   console.error("That is an invalid entry!")
    // };
    this.admin.sendRequest(submission);
  }
}
