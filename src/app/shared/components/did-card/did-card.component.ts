import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-did-card',
  templateUrl: './did-card.component.html',
  styleUrls: ['./did-card.component.css']
})
export class DidCardComponent {

  constructor() { }

  @Input() startDate;
  @Input() endDate;

}
