import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';

@Component({
  selector: 'app-levels-dropdown',
  templateUrl: './levels-dropdown.component.html',
  styleUrls: ['./levels-dropdown.component.scss'],
  providers: [ProjectsService]
})
export class LevelsDropdownComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getAllConsultingLevel().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.consultingLevels = entries;
    })
  }

  consultingLevels: Object[];
}
