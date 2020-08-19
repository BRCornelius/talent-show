import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    this.itemValue = Object.values(this.item)[0];
  }

  @Input() item: IGradedItem = {mmm: "54"};
  @Input() active: boolean;
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  resolveSign: Function = (): string => this.active ? "-" : "+";

  isSubmitted: boolean = true;
  itemKey: string;
  itemValue: string;
  value: string;

  handleValueChange: Function = ($event) => {
    this.isSubmitted = false;
    this.value = $event;
  }


  valueChange: Function = () => {
    this.isSubmitted = true;
    this.changeValue.emit({[this.itemKey]: this.value})
  }

  toggleActive: Function = () => {
    this.active = !this.active;
    this.admin.updateActiveEmployeeClients(this.itemKey, this.active);
    this.itemValue = "0";
  };
}
