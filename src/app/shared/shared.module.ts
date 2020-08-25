import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayCardComponent } from './components/display-card/display-card.component';
import { DisplayGridComponent } from './components/display-grid/display-grid.component';
import { DisplayInfoComponent } from './components/display-info/display-info.component';
import { DisplayModalComponent } from './components/display-modal/display-modal.component';

import {MatDialogModule} from '@angular/material/dialog';
import { InterstitialComponent } from './components/interstitial/interstitial.component';
import { GradedListItemComponent } from './components/graded-list-item/graded-list-item.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DidDisplayComponent } from './components/did-display/did-display.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DidCardComponent } from './components/did-card/did-card.component';
import { PtoDisplayComponent } from './components/pto-display/pto-display.component';

@NgModule({
  declarations: [
    DidDisplayComponent,
    DisplayCardComponent,
    DisplayGridComponent,
    DisplayInfoComponent,
    DisplayModalComponent,
    InterstitialComponent,
    GradedListItemComponent,
    DidCardComponent,
    PtoDisplayComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  exports: [
    DidDisplayComponent,
    DisplayCardComponent,
    DisplayGridComponent,
    DisplayInfoComponent,
    DisplayModalComponent,
    InterstitialComponent,
    GradedListItemComponent,
    DidCardComponent,
    PtoDisplayComponent],
  entryComponents: [DisplayModalComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
