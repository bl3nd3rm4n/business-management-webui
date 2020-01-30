import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BlockedUsersTableService {
  url = "https://safe-shore-17677.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getBlockedUsers(): Observable<any> {
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    return this.httpClient.get(this.url + "/supervisor/blockedUsers", {
      headers
    });
  }

  approveBlockedUser(approvedUser: string) {
    const body = { hashedEmail: approvedUser };
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    this.httpClient
      .put(this.url + "/supervisor/approveBlockedUser", body, {
        headers
      })
      .subscribe();
  }

  rejectBlockedUser(rejectedUser: string) {
    const body = { hashedEmail: rejectedUser };
    const headers = new HttpHeaders({
      token: localStorage.getItem("token")
    });
    this.httpClient
      .put(this.url + "/supervisor/rejectBlockedUser", body, {
        headers
      })
      .subscribe();
  }
}
