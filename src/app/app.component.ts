import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

function useLanguage(language: any) {
  this.translate.use(language);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PCWebui';
  isSupervisor: boolean;
  isLoggedIn: boolean;

  constructor(public translate: TranslateService, private router: Router, private loginService: LoginService) {
    translate.addLangs(['en', 'ro' , 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');
  }

  ngOnInit() {
    this.supervisorRoleCheck();
  }

  logout() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  checkLogin() {
    if (localStorage.getItem('loggedIn') === 'false') {
      this.isLoggedIn = false;
      return this.isLoggedIn;
    }
    else {
      return true;
    }
  }

  supervisorRoleCheck() {
    if (localStorage.getItem('supervisor') === 'false') {
      this.isSupervisor = false;
      return this.isSupervisor;
    }
    else {
      return true;
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}