import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { CalendarHeadComponent } from './components/calendar-head/calendar-head/calendar-head.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthSwitcherComponent,
    TableLayoutComponent,
    CalendarHeadComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
