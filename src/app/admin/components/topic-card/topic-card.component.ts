import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() item: any = ["mmm", "54"];

}
