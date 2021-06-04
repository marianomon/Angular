import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZapatosListComponent } from './zapatos-list/zapatos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapatosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
