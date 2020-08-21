import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'shared-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.css']
})
export class DisplayModalComponent implements OnInit {

  constructor(
    private date: DateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    switch(this.data.path) {
      case 'cast':
        this.daysOffArray = this.data.days;
        this.teamMemberCount = 0;
        break;
      case 'teams':
        this.date.getTeamDaysOff(this.data.item.members);
        this.teamMemberCount = this.data.item.members.length;
        this.daysOffArray = this.date.teamDaysOffArray;
        break;
      default:
    }
  }

  daysOffArray: any[];
  teamMemberCount: number;

}
