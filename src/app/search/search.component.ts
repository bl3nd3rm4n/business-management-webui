import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  skills: any[];
  selected: string;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getAllSkills().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.skills = entries;
    });
    
  }

  updateSelected(q) {
    this.selected = q.id;
  }

  onFoodSelection2() {
    console.log(this.selected);
  }

  getUsers() {
    this.projectsService.getBySkill(this.selected).subscribe(resp => {
      this.supervisedEmployees = resp.body;
    })
  }

  public supervisedEmployees = [];
  displayedColumns: string[] = ["name", "email"];
}
