import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';
import { MatNativeDateModule } from "@angular/material";


@Component({
  selector: 'app-update-consulting-level-dialog',
  templateUrl: './update-consulting-level-dialog.component.html',
  providers: [ProjectsService],
  styleUrls: ['./update-consulting-level-dialog.component.scss']
})
export class UpdateConsultingLevelDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateConsultingLevelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {consultingLevel}) {
      this.form = fb.group({
        consultingLevel: [consultingLevel, Validators.required]
      })
    }

  ngOnInit() {
    this.projectsService.getAllConsultingLevel().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.consultingLevels = entries;
    })
  }

  save() {
    this.dialogRef.close(this.form.value)
  }

  close() {
    this.dialogRef.close();
  }

  consultingLevels: Object[];
}
