import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProjectsService } from '../user-projects-table/user-projects-table.service';
import { MatNativeDateModule } from "@angular/material";

@Component({
  selector: 'app-update-region-dialog',
  templateUrl: './update-region-dialog.component.html',
  providers: [ProjectsService],
  styleUrls: ['./update-region-dialog.component.scss']
})
export class UpdateRegionDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateRegionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {region}) {
      this.form = fb.group({
        region: [region, Validators.required]
      });
    }

  ngOnInit() {
    this.projectsService.getAllRegions().subscribe(resp => {
      let entries = [];
      resp.body.forEach(q => entries.push(q));
      this.regions = entries;
    })
  }

  save() {
    this.dialogRef.close(this.form.value)
  }

  close() {
    this.dialogRef.close();
  }

  regions: Object[];
}
