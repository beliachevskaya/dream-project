import { NgModule } from '@angular/core';

import { HeaderTimelogsComponent } from './header-timelogs/header-timelogs.component';
import { TimesheetByWeekComponent } from './timesheet-by-week/timesheet-by-week.component';
import { TimelogComponent } from './timelog/timelog.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelogSelectComponent } from './timelog-select/timelog-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimesheetByWeekComponent,
    TimelogComponent,
    HeaderTimelogsComponent,
    TimelogSelectComponent,
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FormsModule
  ],
  entryComponents: [
  ],
  exports: [
    TimelogComponent
  ]
})
export class TimelogsModule { }
