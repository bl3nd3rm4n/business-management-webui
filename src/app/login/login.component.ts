import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Login } from "../models/login.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { LoginService } from "../service/login.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginCreds: Login;
  text: number;

  constructor(
    private translateService: TranslateService,
    private toasterService: ToastrService,
    private router: Router,
    private authservice: AuthService,
    private loginservice: LoginService
  ) {}

  ngOnInit() {
    this.generateNumbers();
    localStorage.setItem("loggedIn", "false");
  }

  login(username, pass, captcha) {
    this.loginCreds = {
      email: username.value,
      password: pass.value
    };

    if (this.text.toString() !== captcha.value.toString()) {
      this.toasterService.error(
        this.translateService.instant("NOTIFICATION.INVALID_CAPTCHA")
      );
      this.generateNumbers();
      return;
    }

    this.loginservice.sentToBackendUserCredentials(this.loginCreds).subscribe(
      response => {
        this.toasterService.success(
          this.translateService.instant("NOTIFICATION.LOGIN_SUCCESS")
        );
        this.setToken(JSON.parse(response).token);
        this.authservice.loggedInSetter();
        this.router.navigate(["/dashboard"]);
      },
      error => {
        console.log(error);
        if (error.error === "User has not been found") {
          this.toasterService.error(
            this.translateService.instant("LOGIN.USERNOTFOUND")
          );
        } else if (error.error === "Credentials are invalid!") {
          this.toasterService.error(
            this.translateService.instant("LOGIN.CREDENTIALSINVALID")
          );
        } else {
          this.toasterService.error(error);
        }
      }
    );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  generateNumbers() {
    this.text = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  }

  register_navigate() {
    this.router.navigate(["/register"]);
  }
}
