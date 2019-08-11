import { NgModule } from '@angular/core';

import { HeaderTimelogsComponent } from './header-timelogs/header-timelogs.component';
import { TimesheetByWeekComponent } from './timesheet-by-week/timesheet-by-week.component';
import { TimelogComponent } from './timelog/timelog.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelogSelectComponent } from './timelog-select/timelog-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent, HeaderComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    TimesheetByWeekComponent,
    TimelogComponent,
    HeaderTimelogsComponent,
    TimelogSelectComponent,
    DatepickerComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DatepickerComponent,
    HeaderComponent
  ],
  exports: [
    TimelogComponent
  ]
})
export class TimelogsModule { }
