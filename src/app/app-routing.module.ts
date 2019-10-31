import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'playground', component: PlaygroundComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
