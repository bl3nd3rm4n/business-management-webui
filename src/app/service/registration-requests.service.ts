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
      token: "200"
    });
    return this.httpClient.get(
      "http://localhost:6543/supervisor/registrationRequests",
      { headers }
    );
  }

  approveRegistrationRequest(approvedHashedEmail: string) {
    const body = { hashedEmail: approvedHashedEmail };
    const headers = new HttpHeaders({
      token: "200"
    });
    this.httpClient
      .put(
        "http://localhost:6543/supervisor/approveRegistrationRequest",
        body,
        {
          headers
        }
      )
      .subscribe();
  }

  rejectRegistrationRequest(rejectedHashedEmail: string) {
    const body = { hashedEmail: rejectedHashedEmail };
    const headers = new HttpHeaders({
      token: "200"
    });

    this.httpClient
      .put("http://localhost:6543/supervisor/rejectRegistrationRequest", body, {
        headers
      })
      .subscribe();
  }
}
