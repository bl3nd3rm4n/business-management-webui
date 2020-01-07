import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegistrationRequestsService {
  url = "http://localhost:6543";
  constructor(private httpClient: HttpClient) {}

  getRegistrationRequests(): Observable<any> {
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    return this.httpClient.get(this.url + "/supervisor/registrationRequests", {
      headers
    });
  }

  approveRegistrationRequest(approvedHashedEmail: string) {
    const body = { hashedEmail: approvedHashedEmail };
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    this.httpClient
      .put(this.url + "/supervisor/approveRegistrationRequest", body, {
        headers
      })
      .subscribe();
  }

  rejectRegistrationRequest(rejectedHashedEmail: string) {
    const body = { hashedEmail: rejectedHashedEmail };
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    this.httpClient
      .put(this.url + "/supervisor/rejectRegistrationRequest", body, {
        headers
      })
      .subscribe();
  }
}
