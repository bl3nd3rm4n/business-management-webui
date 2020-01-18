import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./guards/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { DiffPageComponent } from "./diff-page/diff-page.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "personal-info",
        component: PersonalInfoComponent
      }
    ]
  },
  {
    path: "playground",
    component: PlaygroundComponent
  },
  {
    path: "diff/:email",
    pathMatch: "full",
    component: DiffPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
