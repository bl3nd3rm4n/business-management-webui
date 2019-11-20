import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('personalInfoChild', { static: true }) personalInfoChild: SkillsComponent;

  constructor() { }

  ngOnInit() {
  }

  onEditModeChanged(event: MatSlideToggleChange) {
    console.log(event.checked);
    this.personalInfoChild.toggleEditMode(event.checked);
  }

}
