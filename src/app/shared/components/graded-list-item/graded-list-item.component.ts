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
    this.key = Object.keys(this.gradedItem)[0];
    this.value = Object.values(this.gradedItem)[0];
  }

  @Input() gradedItem: IGradedItem;
  @Input() type: string;
  key: string;
  value: string;
}
