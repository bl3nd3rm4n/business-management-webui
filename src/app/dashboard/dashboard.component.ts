import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";
import { LoginComponent } from "../login/login.component";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = [
    {
      text: "Profile",
      cols: 3,
      rows: 2,
      color: "lightblue",
      link: "/dashboard/profile-page"
    },
    { text: "Reports", cols: 1, rows: 4, color: "lightgreen", link: "" },
    {
      text: "Playground",
      cols: 1,
      rows: 2,
      color: "lightpink",
      link: "/playground"
    },
    { text: "Settings", cols: 2, rows: 2, color: "#DDBDF1", link: "" },
    {
      text: "Relu #1 Manager ma boy bodan",
      rows: 2,
      cols: 4,
      color: "lightyellow",
      link: ""
    }
  ];
  isSupervisor: boolean;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.supervisorRoleCheck();
  }

  supervisorRoleCheck() {
    this.loginService.supervisorRoleCheck().subscribe(
      response => {
        if (response == "True") this.isSupervisor = true;
        else this.isSupervisor = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
