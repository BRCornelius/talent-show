import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CastModule } from './cast/cast.module';
import { NavigationComponent } from './core/components';
import { NavigationService } from './core/services';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from './shared/shared.module';
import { TeamModule } from './team/team.module';
import { AdminModule } from './admin/admin.module';
import { NavigationLinkComponent } from './core/components/navigation-link/navigation-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CastModule,
    MatSidenavModule,
    SharedModule,
    TeamModule,
    AdminModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
