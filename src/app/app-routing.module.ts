import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorePageComponent } from './core';
import { CastPageComponent } from './cast';
import { TeamPageComponent } from './team/page/team-page/team-page.component';
import { AdminPageComponent } from './admin/pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: CorePageComponent },
  { path: 'cast', component: CastPageComponent },
  { path: 'teams', component: TeamPageComponent },
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
