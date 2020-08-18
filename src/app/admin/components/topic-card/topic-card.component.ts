import { Component, OnInit, Input } from '@angular/core';
import { IGradedItem } from 'src/app/shared/models/i-graded-item';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.itemKey = this.active ? Object.keys(this.item)[0] : this.item.name;
    this.itemValue = Object.values(this.item)[0].concat("%");
  }

  @Input() item: IGradedItem = {mmm: "54"};
  @Input() active: boolean;

  resolveSign: Function = (): string => this.active ? "-" : "+";

  itemKey: string;
  itemValue: string;
  value: string;

  toggleActive: Function = () => {
    this.active = !this.active;
    this.admin.updateActiveEmployeeClients(this.itemKey, this.active);
    this.itemValue = "0%";
  };
}
