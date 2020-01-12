import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ProjectsService } from './user-projects-table.service';
import { ProjectExperienceTransport, ProjectExperienceEntry, ChangeModel } from '../models/project-experience.model';
import { getLocaleEraNames } from '@angular/common';

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
  
  @Input() diffMode: boolean;
  @Input() editMode: boolean;
  edits: ChangeModel[] = [];


  ngOnInit(): void {
    this.render();
  }

  render() {
    this.projectsService.getFullUserSpecification("hans.futterman@test.com", this.diffMode).subscribe(resp => {
      let entries: ProjectExperienceEntry[] = [];
      resp.body.projectExperience.forEach(transport => {
        entries.push(this.mapProjectExperienceTransportToEntry(transport));
      });
      this.projectExperienceEntries = entries;
    });
    this.edits = [];
  }

  mapProjectExperienceTransportToEntry(transport: ProjectExperienceTransport) : ProjectExperienceEntry {
    return {
      id: transport.id,
      itemState: transport.itemState,
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

  getAllColumnsToDisplay() {
    var colls = [];
    this.columnsToDisplay.forEach(el => {
      colls.push(el);
    });
    if (this.editMode) {
      colls.push({value: "delete", displayName: "Delete"})
    }
    return colls;
  }

  getAllColls() {
    var colls = [];
    this.allColls.forEach(el => {
      colls.push(el);
    });
    if (this.editMode) {
      colls.push("delete")
    }
    return colls;
  }

  constructor (private projectsService: ProjectsService) {}

  deleteHandler(el) {
    var id = el.id;
    var resource = "PROJECT";
    var changeType = "DELETE";
    this.projectExperienceEntries = this.projectExperienceEntries.filter(p => p.id !== id);
    var changeModel: ChangeModel = {
      resource: resource,
      changeType: changeType,
      args: {"id": id}
    }
    
    this.edits.push(changeModel);
    console.log(this.edits);
  }

  saveEditsHandler() {
    this.projectsService.saveEdits(this.edits, 'hans.futterman@test.com').subscribe();
  }

  addClickHandler() {
    var newId = '' + Math.floor(Date.now() / 1000)
    var changeType = 'ADD';
    var resource = 'PROJECT';
    var args = {
      newId: newId,
      consultingLevelId: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris bibendum facilisis finibus. Morbi condimentum at augue nec lobortis. Praesent ac arcu quis orci pharetra pretium. Aliquam laoreet massa at purus lobortis, ut tempor sapien sodales. Nunc suscipit dolor eget dui commodo, id iaculis nisl rhoncus. Vestibulum semper ante id tortor sollicitudin, non dignissim lorem varius. Integer sodales varius lobortis. Morbi eget tortor in risus vestibulum pretium. Maecenas iaculis erat id velit cursus hendrerit. Maecenas sed velit eu massa tempus imperdiet. Integer id neque erat. Sed mauris lorem, luctus id urna nec, laoreet feugiat mauris. Vestibulum eget velit at ipsum maximus varius. Curabitur dignissim condimentum odio in auctor. Integer elementum vehicula risus, id sagittis tortor lacinia ac. Nam fringilla, nisl vel fermentum ultrices, nibh nulla elementum arcu, ac volutpat ex ante ut massa.',
      endDate: 123456789,
      startDate: 123456789,
      projectId: 1
    }

    this.projectsService.patchProjectExperience(args).subscribe(r => {
      var x: ProjectExperienceEntry[] = [];
      this.projectExperienceEntries.forEach(el => {
        x.push(el)
      });
      x.push(this.mapProjectExperienceTransportToEntry(r));
      this.projectExperienceEntries = x;
      console.log(this.projectExperienceEntries);
    });
    var changeModel: ChangeModel = {
      resource: resource,
      changeType: changeType,
      args: args
    }
    
    this.edits.push(changeModel);
    console.log(this.edits);
  }
}
