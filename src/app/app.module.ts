import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthSwitcherComponent,
    TableLayoutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
