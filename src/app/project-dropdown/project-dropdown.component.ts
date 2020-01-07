import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';

@Component({
  selector: 'app-project-dropdown',
  templateUrl: './project-dropdown.component.html',
  providers: [ProjectsService],
  styleUrls: ['./project-dropdown.component.scss']
})
export class ProjectDropdownComponent implements OnInit {

  constructor (private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.projects = entries;
    })
  }

  projects: Object[];

}
