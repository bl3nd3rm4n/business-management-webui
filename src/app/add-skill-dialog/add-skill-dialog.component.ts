import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';
import { MatNativeDateModule } from "@angular/material";

@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  providers: [ProjectsService],
  styleUrls: ['./add-skill-dialog.component.scss']
})
export class AddSkillDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {skill}) {
      this.form = fb.group({
        skill: [skill, Validators.required]
      });
    }

  ngOnInit() {
    this.projectsService.getAllSkills().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.skills = entries;
    })
  }

  save() {
    this.dialogRef.close(this.form.value)
  }

  close() {
    this.dialogRef.close();
  }

  skills: any[];
}
