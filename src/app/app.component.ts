import { Component, OnInit } from '@angular/core';
import { CountriesI18nService } from './countries-i18n.service';
import { I18nUtilService } from './i18n-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'translate-test';
  countries: string[] = ['ve', 'de', 'mt', 'il'];
  constructor(public cs: CountriesI18nService, private i18nUtil: I18nUtilService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.countries.length; i++) {
      this.countries[i] = this.i18nUtil.get(`country-${this.countries[i]}`);

    }
  }

}
