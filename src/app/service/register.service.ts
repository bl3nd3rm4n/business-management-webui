import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Register} from "../models/register.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }
  sendToBackendUserRegister(registerCreds: Register){
    return this.http.post('http://localhost:6543/register', registerCreds , { responseType: 'text'})
  }
}
