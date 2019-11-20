import { Component, Inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SkillsComponent {

  constructor(public dialog: MatDialog) {}
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['domain', 'position', 'experience', 'company'];
  expandedElement: Skill | null;
  editMode =  false;

  toggleEditMode(isChecked) {
    this.editMode = isChecked;
    if (isChecked) {
      this.columnsToDisplay.push('actions');
    } else {
      this.columnsToDisplay.pop();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add-dialog.html',
})
export class AddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface Skill {
  domain: string;
  position: string;
  company: string;
  experience: string;
  description: string;
  actions?: string;
}

const ELEMENT_DATA: Skill[] = [
  {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    actions: 'a',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }, {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }, {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }, {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }, {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }, {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }, {
    domain: 'Microservices',
    position: 'Senior Developer',
    experience: '2 years',
    company: 'Random company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo at nunc tincidunt condimentum ut imperdiet lectus'
  }
];
