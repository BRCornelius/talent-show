import { Component, Input } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'shared-did-display',
  templateUrl: './did-display.component.html',
  styleUrls: ['./did-display.component.css']
})
export class DidDisplayComponent {

  constructor(public date: DateService) {}

  @Input() daysOff: any[];
  @Input() type: string;
  @Input() teamMemberCount: number;

  handleStartDateChange: Function = ($event) => {
    this.date.startDate = $event.value;
  }

  handleEndDateChange: Function = ($event) => {
    this.date.endDate = $event.value;
  }

  mockSubmit: Function = () => {
    this.date.showDates(this.daysOff, this.type, this.teamMemberCount);
  }

}
