import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-graded-list',
  templateUrl: './graded-list.component.html',
  styleUrls: ['./graded-list.component.css']
})
export class GradedListComponent implements OnInit {

  constructor(public admin: AdminService) { }

  @Input() title: string;
  @Output() passValue: EventEmitter<any> = new EventEmitter();

  counterTopic: any[];
  topic: any[];

  ngOnInit() {
    switch (this.title) {
      case 'Clients':
        this.topic = this.admin.activeEmployee.client;
        this.counterTopic = this.admin.activeEmployee.inactiveClients;
        break;
      case 'Skills':
        this.topic = this.admin.activeEmployee.skills;
        this.counterTopic = this.admin.activeEmployee.inactiveSkills;
        break;
      default:
        this.topic = [];
    }
  }

  handleTopicValueChanged: Function = (value) => {
    this.passValue.emit({value, type: this.title});
  }

}
