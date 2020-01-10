import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BlockedUsersTableService {
  url = "http://localhost:6543";

  constructor(private httpClient: HttpClient) {}

  getBlockedUsers(): Observable<any> {
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    return this.httpClient.get(this.url + "/supervisor/blockedUsers", {
      headers
    });
  }

  approveBlockedUser(approvedUser: string) {}

  rejectBlockedUser(rejectedUser: string) {}
}
