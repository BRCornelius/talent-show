import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastRoutingModule } from './cast-routing.module';
import { CastPageComponent } from './cast-page/cast-page.component';

@NgModule({
  declarations: [CastPageComponent],
  imports: [
    CommonModule,
    CastRoutingModule
  ],
  exports: [CastPageComponent]
})
export class CastModule { }
