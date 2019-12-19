import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the service
import { I18n } from '@ngx-translate/i18n-polyfill';

declare const require; // Use the require method provided by webpack
export function translations(locale: string) {
  if (locale === 'en-US') { locale = '.en'; } else { locale = `.${locale}`; }
  return require(`raw-loader!../locale/messages${locale}.xlf`).default;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: TRANSLATIONS_FORMAT, useValue: "xlf" },
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        console.log('current locale => ', locale);
        locale = locale || 'en'; // default to english if no locale provided
        return translations(locale);
      },
      deps: [LOCALE_ID]
    },
    I18n
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
