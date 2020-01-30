import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SupervisedEmployeesService {
  constructor(private httpClient: HttpClient) {
  }

  getSupervisedEmployees(): Observable<any> {
    let currentEmail: String = localStorage.getItem("email");

    return this.httpClient.get("http://localhost:6543/supervisor/" + currentEmail + "/users");
  }
}
