import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegistrationRequestsService {
  constructor(private httpClient: HttpClient) {}

  getRegistrationRequests(): Observable<any> {
    return this.httpClient.get("http://localhost:6543/supervisor/registrationRequests");
  }

  approveRegistrationRequest(approvedHashedEmail: string) {
    // hashedEmail: new HttpParams().set('hashedEmail', approvedHashedEmail);
    console.log(approvedHashedEmail);
    this.httpClient.put("http://localhost:6543/supervisor/approveRegistrationRequest", { hashedEmail: approvedHashedEmail }).subscribe(resp => {});
  }

  rejectRegistrationRequest(rejectedHashedEmail: string) {
    // hashedEmail: new HttpParams().set('hashedEmail', approvedHashedEmail);
    console.log(rejectedHashedEmail);
    this.httpClient.put("http://localhost:6543/supervisor/rejectRegistrationRequest", { hashedEmail: rejectedHashedEmail }).subscribe(resp => {});
  }
}
