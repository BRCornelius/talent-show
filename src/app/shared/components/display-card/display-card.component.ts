import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DisplayModalComponent } from '../display-modal/display-modal.component';

@Component({
  selector: 'shared-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  @Input() item: any;
  @Input() path: string;

  bottomLeftText: string;
  bottomRightText: string;

  ngOnInit() {
    switch (this.path) {
      case 'cast':
        this.bottomLeftText = this.item.title;
        this.bottomRightText = this.item.team;
        break;
      default:
        this.bottomLeftText = `Team Lead: ${this.item.super}`;
    }
  }

  toggleOpen: Function = (): MatDialogRef<DisplayModalComponent> =>
    this.dialog.open(DisplayModalComponent, {
      data: {
        item: this.item,
        path: this.path
      }
    })

}
