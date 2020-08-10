import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SharedModule } from '../shared/shared.module';
import { AdminPageIndividualComponent } from './pages/admin-page-individual/admin-page-individual.component';
import { AdminSelectComponent } from './components/admin-select/admin-select.component';
import { AdminService } from './services/admin.service';
import { CastService } from '../cast/services/cast.service';
import { IndividualFormComponent } from './components/individual-form/individual-form.component';
import { AdminPageTeamComponent } from './pages/admin-page-team/admin-page-team.component';
import { TeamFormComponent } from './components/team-form/team-form.component';

@NgModule({
  declarations: [
    AdminSelectComponent,
    AdminPageComponent,
    AdminPageIndividualComponent,
    AdminPageTeamComponent,
    IndividualFormComponent,
    TeamFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  bootstrap: [AdminPageComponent],
  entryComponents: [AdminPageComponent],
  exports: [AdminPageComponent],
  providers: [AdminService, CastService]
})
export class AdminModule { }
