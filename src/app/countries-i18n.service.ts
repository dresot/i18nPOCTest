import { Injectable } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';

@Injectable({
  providedIn: 'root'
})
export class CountriesI18nService {

  constructor(private i18n: I18n) {

  }

  private registerCountries() {
    // const data: ICountry[] = this.getCountries();
    this.i18n({ id: "country-mt", value: 'mt' });
    this.i18n({ id: "country-ve", value: "ve" });
    this.i18n({ id: "country-de", value: "de" });
    this.i18n({ id: "country-il", value: "il" });
  }

  public getCountries(): ICountry[] {
    return [
      { code: "mt", name: "MALTA" },
      { code: "ve", name: "VENEZUELA" },
      { code: "de", name: "GERMANY" },
      { code: "il", name: "ITALY" }
    ];
  }
}

export interface ICountry {
  code: string;
  name: string;
}

