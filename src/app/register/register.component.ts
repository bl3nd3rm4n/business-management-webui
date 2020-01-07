import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
import {NgForm} from "@angular/forms";
import {Register} from "../models/register.model";
import {Router} from "@angular/router";
import {RegisterService} from "../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registercreds: Register;
  constructor(private toasterService: ToastrService, private translateService: TranslateService,
              private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(email, pass) {
    this.registercreds = {
      email: email.value,
      password: pass.value
    };

    this.registerService.sendToBackendUserRegister(this.registercreds).subscribe(
      response => {
        this.toasterService.success(this.translateService.instant('NOTIFICATION.REGISTER_SUCCESS'));
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
}
