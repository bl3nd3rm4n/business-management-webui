import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

function useLanguage(language: any) {
  this.translate.use(language);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PCWebui';


  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ro' , 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');


  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
