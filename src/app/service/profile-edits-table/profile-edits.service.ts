import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProfileEditsService {
  url = "http://localhost:6543";

  constructor(private httpClient: HttpClient) {}

  getProfileEdits(): Observable<any> {
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    return this.httpClient.get(this.url + "/supervisor/profileEdits", {
      headers
    });
  }
}
