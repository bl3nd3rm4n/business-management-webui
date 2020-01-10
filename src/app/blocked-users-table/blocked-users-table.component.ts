import { Component, OnInit } from "@angular/core";

import { BlockedUsersTableService } from "../service/blocked-users-table/blocked-users.service";

@Component({
  selector: "app-blocked-users-table",
  templateUrl: "./blocked-users-table.component.html",
  styleUrls: ["./blocked-users-table.component.scss"]
})
export class BlockedUsersTableComponent implements OnInit {
  blockedUsers = [];
  displayedColumns: string[] = ["id", "name", "email", "approvedeny"];

  constructor(private _blockedUsersService: BlockedUsersTableService) {}

  ngOnInit() {
    this.refreshTable();
  }

  approveBlockedUser(hashedEmail: string) {
    this._blockedUsersService.approveBlockedUser(hashedEmail);
    this.ngOnInit()
  }

  rejectBlockedUser(hashedEmail: string) {
    this._blockedUsersService.rejectBlockedUser(hashedEmail);
    this.refreshTable();
  }

  refreshTable() {
    this.blockedUsers = [];
    this._blockedUsersService
      .getBlockedUsers()
      .subscribe(data => (this.blockedUsers = data));
  }
}
