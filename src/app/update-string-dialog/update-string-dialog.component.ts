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
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateStringDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {value, title}) { 
      this.value = value;
      this.title = title;
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
