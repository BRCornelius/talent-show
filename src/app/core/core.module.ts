import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePageComponent } from './page/core-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CorePageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CorePageComponent],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
