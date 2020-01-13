import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-string-dialog',
  templateUrl: './update-string-dialog.component.html',
  styleUrls: ['./update-string-dialog.component.scss']
})
export class UpdateStringDialogComponent implements OnInit {
  form: FormGroup;
  value: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateStringDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {value}) { 
      this.value = value;
      this.form = fb.group({
        value: [value, Validators.required]
      })
    }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
