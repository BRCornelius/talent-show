import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayCardComponent } from './components/display-card/display-card.component';
import { DisplayGridComponent } from './components/display-grid/display-grid.component';
import { DisplayInfoComponent } from './components/display-info/display-info.component';
import { DisplayModalComponent } from './components/display-modal/display-modal.component';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [DisplayCardComponent, DisplayGridComponent, DisplayInfoComponent, DisplayModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [DisplayCardComponent, DisplayGridComponent, DisplayInfoComponent, DisplayModalComponent],
  entryComponents: [DisplayModalComponent]
})
export class SharedModule { }
