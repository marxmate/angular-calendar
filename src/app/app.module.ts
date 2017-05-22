import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { YearViewComponent } from './calendar/year-view/year-view.component';
import { MonthViewComponent } from './calendar/month-view/month-view.component';
import { WeekViewComponent } from './calendar/week-view/week-view.component';
import { EventComponent } from './calendar/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    YearViewComponent,
    MonthViewComponent,
    WeekViewComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
