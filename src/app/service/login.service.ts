import { Injectable } from '@angular/core';
import {BackendService} from "../core/backend/backend.service";
import {Login} from "../models/login.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private backendService: BackendService, private http: HttpClient) { }
  // :Observable<User>
  sentToBackendUserCredentials(loginCreds: Login) {
    return this.http.post('http://localhost:6543/login', loginCreds , { responseType: 'text'});
  }
}
