import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamPageComponent } from './page/team-page/team-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TeamPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ],
  exports: [TeamPageComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TeamModule { }
