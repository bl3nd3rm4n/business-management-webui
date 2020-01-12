import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';
import { MatNativeDateModule } from "@angular/material";

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  providers: [ProjectsService],
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {

  form: FormGroup;
  description: string;

  constructor(
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {description, project, consultingLevel, startDate, endDate}) {

      this.description = description;

      this.form = fb.group({
        description: [description, Validators.required],
        project: [project, Validators.required],
        consultingLevel: [consultingLevel, Validators.required],
        startDate: [startDate, Validators.required],
        endDate: [endDate, Validators.required]
      });
    }

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.projects = entries;
    });

    this.projectsService.getAllConsultingLevel().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.consultingLevels = entries;
    })
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  projects: Object[];
  consultingLevels: Object[];

}