import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayCardComponent } from './components/display-card/display-card.component';
import { DisplayGridComponent } from './components/display-grid/display-grid.component';
import { DisplayInfoComponent } from './components/display-info/display-info.component';
import { DisplayModalComponent } from './components/display-modal/display-modal.component';

import {MatDialogModule} from '@angular/material/dialog';
import { InterstitialComponent } from './components/interstitial/interstitial.component';


@NgModule({
  declarations: [DisplayCardComponent, DisplayGridComponent, DisplayInfoComponent, DisplayModalComponent, InterstitialComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [DisplayCardComponent, DisplayGridComponent, DisplayInfoComponent, DisplayModalComponent, InterstitialComponent],
  entryComponents: [DisplayModalComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
