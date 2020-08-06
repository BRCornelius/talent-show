import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CastRoutingModule } from './cast-routing.module';
import { CastPageComponent } from './cast-page/cast-page.component';
import { CastService } from './services/cast.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CastPageComponent],
  imports: [
    CommonModule,
    CastRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [CastService],
  exports: [CastPageComponent]
})
export class CastModule { }
