import { Injectable } from "@angular/core";
import { BackendService } from "../core/backend/backend.service";
import { Login } from "../models/login.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginComponent } from "../login/login.component";
import { error } from "util";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  url = "http://localhost:6543";
  constructor(
    private backendService: BackendService,
    private http: HttpClient
  ) {}
  
  sentToBackendUserCredentials(loginCreds: Login) {
    return this.http.post("http://localhost:6543/login", loginCreds, {
      responseType: "text"
    });
  }

  supervisorRoleCheck(): Observable<any> {
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });

    return this.http.get(this.url + "/supervisor/check", {
      headers,
      responseType: "text"
    });
  }

  logout() {
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    this.http.delete(this.url + "/logout", { headers }).subscribe();
  }
}
