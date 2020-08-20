import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { TopicService } from '../../services/topic.service';
import { IndividualService } from '../../services/individual.service';
import { replaceElement } from '../../util/utilities';

@Component({
  selector: 'admin-individual-form',
  templateUrl: './individual-form.component.html',
  styleUrls: ['./individual-form.component.css'],
})
export class IndividualFormComponent implements OnInit {

  constructor(
    public admin: AdminService,
    public topic: TopicService,
    public ind: IndividualService
  ) { }

  ngOnInit() {
    this.type = this.edit ? "Edit" : "Add";
  }

  @Input() edit: boolean;

  type: string;

  handleTopicValueChanged: Function = (data) => {
    const { type, value } = data;
    switch (type) {
      case 'Clients':
        replaceElement(this.admin.activeEmployee.client, value);
        break;
      case 'Skills':
        replaceElement(this.admin.activeEmployee.skills, value)
        break;
      default:
    }
  }
}
