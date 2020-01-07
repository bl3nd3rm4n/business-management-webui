import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr';

import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginService} from "./service/login.service";
import {DatePipe} from "@angular/common";
import {AuthGuardService} from "./guards/auth-guard.service";
import {FormsModule} from "@angular/forms";
import { TabViewModule } from 'primeng/components/tabview/tabview';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PlaygroundComponent } from './playground/playground.component';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
import {
  MatCardModule,
  MatDividerModule,
  MatGridListModule, MatListModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatExpansionModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatIconModule,
  MatTableModule,
  MatSortModule
} from "@angular/material";
import { RegisterComponent } from './register/register.component';
import {SharedModule} from 'primeng/shared';
import {CardModule} from 'primeng/card';
import {FileSelectDirective} from 'ng2-file-upload';
import {Ng2FileSizeModule} from 'ng2-file-size';
import { SkillChartComponent } from './skill-chart/skill-chart.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import {ChartModule} from "primeng/chart";
import {ChartsModule} from "ng2-charts";

import { MatButtonModule } from '@angular/material/button';
import { UserProjectsTableComponent } from './user-projects-table/user-projects-table.component';
import {RegisterService} from "./service/register.service";
import { RegistrationRequestsTableComponent } from './registration-requests-table/registration-requests-table.component';
import { RegistrationRequestsService } from './service/registration-requests.service';
import { ProjectDropdownComponent } from './project-dropdown/project-dropdown.component';
import {MatSelectModule} from '@angular/material/select';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilePageComponent,
    DashboardComponent,
    PlaygroundComponent,
    ProfileComponent,
    RegisterComponent,
    FileSelectDirective,
    SkillChartComponent,
    PersonalInfoComponent,
    PersonalInfoComponent,
    SkillChartComponent,
    RegistrationRequestsTableComponent,
    UserProjectsTableComponent,
    ProjectDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2FileSizeModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatListModule,
    ChartsModule,
    MatCardModule,
    MatDividerModule,
    TabViewModule,
    SharedModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LoginService, DatePipe, AuthGuardService, RegisterService, RegistrationRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
