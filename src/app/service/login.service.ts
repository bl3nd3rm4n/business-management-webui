import { Injectable } from '@angular/core';
import {BackendService} from "../core/backend/backend.service";
import {Login} from "../models/login.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private backendService: BackendService) { }

}
