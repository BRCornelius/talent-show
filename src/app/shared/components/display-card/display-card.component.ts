import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayModalComponent } from '../display-modal/display-modal.component';

@Component({
  selector: 'shared-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  constructor(private dialog: MatDialog) { }

  @Input() item: any;

  toggleOpen: Function = (): MatDialogRef<DisplayModalComponent> =>
    this.dialog.open(DisplayModalComponent, {
      data: this.item
    })

}
