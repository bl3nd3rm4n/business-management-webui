import {OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-diff-page',
  templateUrl: './diff-page.component.html',
  styleUrls: ['./diff-page.component.scss']
})
export class DiffPageComponent implements OnInit {

  email: String = null;

  constructor() {}

  ngOnInit() {
  }

}
