import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Login} from '../models/login.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCreds: Login;
  text: number;

  constructor(private translateService: TranslateService, private toasterService: ToastrService,
              private router: Router, private authservice: AuthService, private loginservice: LoginService) { }

  ngOnInit() {
    this.generateNumbers();

    localStorage.setItem('loggedIn', 'false');
    this.generateNumbers();
    localStorage.setItem('loggedIn', 'false');
  }
  login(username, pass, captcha) {
    this.loginCreds = {
      username: username.value,
      password: pass.value
    };
    if (this.text.toString() !== captcha.value.toString()) {
      this.toasterService.error(this.translateService.instant('NOTIFICATION.INVALID_CAPTCHA'));
      this.generateNumbers();
      return;
    }
    this.loginservice.sentToBackendUserCredentials(this.loginCreds).subscribe(
      response => {
        console.log('response is', response);

        this.toasterService.success(this.translateService.instant('NOTIFICATION.LOGIN_SUCCESS'));
        this.authservice.loggedInSetter();
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);

        if (error.error === 'User has not been found') {
          this.toasterService.error(this.translateService.instant('LOGIN.USERNOTFOUND'));
        } else if (error.error === 'Credentials are invalid!') {
          this.toasterService.error(this.translateService.instant('LOGIN.CREDENTIALSINVALID'));
        } else {
          this.toasterService.error(error);
        }
      }
    );
  }
  generateNumbers() {


    this.text = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    console.log(this.text);

  }
  register_navigate() {
    this.router.navigate(['/register']);
  }

}
