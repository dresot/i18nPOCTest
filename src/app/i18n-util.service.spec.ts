import { TestBed } from '@angular/core/testing';

import { I18nUtilService } from './i18n-util.service';

describe('I18nUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I18nUtilService = TestBed.get(I18nUtilService);
    expect(service).toBeTruthy();
  });
});
