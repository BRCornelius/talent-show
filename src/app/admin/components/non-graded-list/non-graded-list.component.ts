import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-non-graded-list',
  templateUrl: './non-graded-list.component.html',
  styleUrls: ['./non-graded-list.component.css']
})
export class NonGradedListComponent {

  constructor() { }
  @Input() title: string;
  @Input() topic;
  @Input() counterTopic;

}
