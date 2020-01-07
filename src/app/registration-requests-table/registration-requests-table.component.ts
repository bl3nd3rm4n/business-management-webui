import { Component, OnInit } from "@angular/core";
import { RegistrationRequestsService } from "../service/registration-requests.service";

@Component({
  selector: "app-registration-requests-table",
  templateUrl: "./registration-requests-table.component.html",
  styleUrls: ["./registration-requests-table.component.scss"]
})
export class RegistrationRequestsTableComponent implements OnInit {
  registrationRequests = [];
  displayedColumns: string[] = ["id", "name", "email", "approvedeny"];

  constructor(
    private _registrationRequestsService: RegistrationRequestsService
  ) {}

  ngOnInit() {
    this.refreshTable();
  }

  approveRegistrationRequest(hashedEmail: string) {
    this._registrationRequestsService.approveRegistrationRequest(hashedEmail);
    this.refreshTable();
  }

  rejectRegistrationRequest(hashedEmail: string) {
    this._registrationRequestsService.rejectRegistrationRequest(hashedEmail);
  }

  refreshTable() {
    this.registrationRequests = [];
    this._registrationRequestsService
      .getRegistrationRequests()
      .subscribe(data => (this.registrationRequests = data));
  }
}
