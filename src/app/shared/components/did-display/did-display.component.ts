import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'shared-did-display',
  templateUrl: './did-display.component.html',
  styleUrls: ['./did-display.component.css']
})
export class DidDisplayComponent {

  constructor(private date: DateService) { }

  handleStartDateChange: Function = ($event) => {
    this.date.startDate = $event.value;
  };

}
