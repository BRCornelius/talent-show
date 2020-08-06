import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorePageComponent } from './core';
import { CastPageComponent } from './cast';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: CorePageComponent },
  { path: 'cast', component: CastPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
