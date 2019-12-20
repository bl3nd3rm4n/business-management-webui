import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegistrationRequestsService {
  constructor(private httpClient: HttpClient) {}

  getRegistrationRequests(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "200"
    });
    return this.httpClient.get(
      "http://localhost:6543/supervisor/registrationRequests",
    );
  }

  approveRegistrationRequest(approvedHashedEmail: string) {
    const body = new HttpParams().set("hashedEmail", approvedHashedEmail);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "200"
    });
    this.httpClient.put(
      "http://localhost:6543/supervisor/approveRegistrationRequest",
      { headers, body }
    );
  }

  rejectRegistrationRequest(rejectedHashedEmail: string) {
    const body = new HttpParams().set("hashedEmail", rejectedHashedEmail);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "200"
    });

    this.httpClient.put(
      "http://localhost:6543/supervisor/rejectRegistrationRequest",
      { headers, body }
    );
  }
}
