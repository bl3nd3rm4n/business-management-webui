import { Component, OnInit } from "@angular/core";
import { ProfileEditsService } from "../service/profile-edits-table/profile-edits.service";

@Component({
  selector: "app-profile-edits-table",
  templateUrl: "./profile-edits-table.component.html",
  styleUrls: ["./profile-edits-table.component.scss"]
})
export class ProfileEditsTableComponent implements OnInit {
  profileEdits = [];
  displayedColumns: string[] = ["id", "name", "email", "view"];

  constructor(private _profileEditsService: ProfileEditsService) {}

  ngOnInit() {
    this.refreshTable();
  }

  showChanges(email: string) {
    // this._profileEditsService.viewChanges(email);
    this.refreshTable();
  }

  refreshTable() {
    this._profileEditsService
      .getProfileEdits()
      .subscribe(data => (this.profileEdits = data));
  }
}
