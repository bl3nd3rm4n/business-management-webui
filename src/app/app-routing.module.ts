import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from "./guards/auth-guard.service";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {SupervisorComponent} from "./supervisor/supervisor.component";
import {PersonalInfoComponent} from "./personal-info/personal-info.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'supervisor',
        component: SupervisorComponent
      }]
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
