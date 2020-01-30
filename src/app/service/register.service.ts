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
    return this.http.post('https://safe-shore-17677.herokuapp.com/register', registerCreds , { responseType: 'text'})
  }
}
