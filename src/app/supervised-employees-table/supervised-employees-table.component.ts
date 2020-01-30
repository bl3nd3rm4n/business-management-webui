import {Component, OnInit} from "@angular/core";
import {SupervisedEmployeesService} from "./supervised-employees.service";

@Component({
  selector: "app-supervised-employees-table",
  templateUrl: "./supervised-employees-table.component.html",
  styleUrls: ["./supervised-employees-table.component.scss"]
})
export class SupervisedEmployeesTableComponent implements OnInit {
  public supervisedEmployees = [];
  displayedColumns: string[] = ["id", "name", "email"];

  constructor(
    private _supervisedEmployeesService: SupervisedEmployeesService
  ) {
  }

  ngOnInit() {
    this._supervisedEmployeesService
      .getSupervisedEmployees()
      .subscribe(data => (this.supervisedEmployees = data));
  }
}
