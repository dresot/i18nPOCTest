import { TestBed } from '@angular/core/testing';

import { CountriesI18nService } from './countries-i18n.service';

describe('CountriesI18nService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesI18nService = TestBed.get(CountriesI18nService);
    expect(service).toBeTruthy();
  });
});
