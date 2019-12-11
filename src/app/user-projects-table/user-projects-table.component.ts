import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ProjectsService } from './user-projects-table.service';
import { ProjectExperienceTransport, ProjectExperienceEntry } from '../models/project-experience.model';

@Component({
  selector: 'app-user-projects-table',
  templateUrl: './user-projects-table.component.html',
  styleUrls: ['./user-projects-table.component.scss'],
  providers: [ProjectsService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserProjectsTableComponent implements OnInit {
  ngOnInit(): void {
    this.projectsService.getProjectForEmail("hans.futterman@test.com").subscribe(resp => {
      let entries: ProjectExperienceEntry[] = [];
      resp.body.forEach(transport => {
        entries.push(this.mapProjectExperienceTransportToEntry(transport));
      });
      this.projectExperienceEntries = entries;
    });
  }

  mapProjectExperienceTransportToEntry(transport: ProjectExperienceTransport) : ProjectExperienceEntry {
    return {
      startDate: this.formatDateTimeToString(new Date(transport.startDate * 1000)),
      endDate: this.formatDateTimeToString(new Date(transport.endDate * 1000)),
      consultingLevel: transport.consultingLevel,
      projectStartDate: this.formatDateTimeToString(new Date(transport.projectStartDate * 1000)),
      projectEndDate: this.formatDateTimeToString(new Date(transport.projectEndDate * 1000)),
      description: transport.description,
      projectName: transport.projectName,
      industry: transport.industry,
      clientAddress: transport.clientAddress,
      clientName: transport.clientName
    };
  }

  formatDateTimeToString(date: Date): string {
    let str: string = '';
    str += date.getFullYear();
    str += '-' + date.getMonth();
    str += '-' + date.getDate();
    return str;
  }

  projectExperienceEntries: ProjectExperienceEntry[];
  columnsToDisplay = [{
    value: 'consultingLevel',
    displayName: 'Consulting Level'
  }, {
    value: 'industry',
    displayName: 'Industry'
  }, {
    value: 'startDate',
    displayName: 'Start Date'
  }, {
    value: 'endDate',
    displayName: 'End Date'
  }];
  allColls = ['consultingLevel', 'industry', 'startDate', 'endDate'];
  expandedElement: ProjectExperienceEntry | null;

  constructor (private projectsService: ProjectsService) {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
