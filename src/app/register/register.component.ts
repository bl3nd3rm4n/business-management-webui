import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private toatrservice: ToastrService, private translateservice: TranslateService) { }

  ngOnInit() {
  }

  registerUser(createUserForm: NgForm) {
  }

}
