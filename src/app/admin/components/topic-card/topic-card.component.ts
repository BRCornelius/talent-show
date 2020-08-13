import { Component, OnInit, Input } from '@angular/core';
import { IGradedItem } from 'src/app/shared/models/i-graded-item';

@Component({
  selector: 'admin-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.itemKey = Object.keys(this.item)[0];
    this.itemValue = Object.values(this.item)[0].concat("%");
  }

  @Input() item: IGradedItem = {mmm: "54"};
  @Input() active: boolean;

  itemKey: string;
  itemValue: string;
  value: string;
}
