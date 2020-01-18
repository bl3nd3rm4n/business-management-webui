import { Component, OnInit } from "@angular/core";
import { ProfileEditsService } from "../service/profile-edits-table/profile-edits.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-profile-edits-table",
  templateUrl: "./profile-edits-table.component.html",
  styleUrls: ["./profile-edits-table.component.scss"]
})
export class ProfileEditsTableComponent implements OnInit {
  profileEdits = [];
  displayedColumns: string[] = ["id", "name", "email", "view"];

  constructor(private _profileEditsService: ProfileEditsService, private router: Router) {}

  ngOnInit() {
    this.refreshTable();
  }

  showChanges(email: string) {
    this.router.navigateByUrl('diff?email=' + email)
    this.refreshTable();
  }

  refreshTable() {
    this._profileEditsService
      .getProfileEdits()
      .subscribe(data => (this.profileEdits = data));
  }
}
