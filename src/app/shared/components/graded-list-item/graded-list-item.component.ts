import { Component, Input, OnInit } from '@angular/core';
import { IGradedItem } from '../../models/i-graded-item';

@Component({
  selector: 'shared-graded-list-item',
  templateUrl: './graded-list-item.component.html',
  styleUrls: ['./graded-list-item.component.css']
})
export class GradedListItemComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    switch(this.type) {
      case "cast":
        this.key = Object.keys(this.gradedItem)[0];
        this.value = Object.values(this.gradedItem)[0].concat("%");
        break;
      default:
        this.key = this.gradedItem;
        this.value = "§"
    }
  }

  @Input() gradedItem: IGradedItem | string;
  @Input() type: string;
  key: string | IGradedItem;
  value: string;
}
