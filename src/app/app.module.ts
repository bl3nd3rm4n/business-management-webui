import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastrModule} from 'ngx-toastr';

import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginService} from "./service/login.service";
import {DatePipe} from "@angular/common";
import {AuthGuardService} from "./guards/auth-guard.service";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PlaygroundComponent } from './playground/playground.component';
import { ProfileComponent } from './profile/profile.component';
import {MatGridListModule, MatToolbarModule} from "@angular/material";

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
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
  providers: [LoginService, DatePipe, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
