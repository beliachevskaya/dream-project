import { NgModule } from '@angular/core';

import { HeadComponent } from './head/head.component';
import { TimesheetByWeekComponent } from './timesheet-by-week/timesheet-by-week.component';
import { TimelogComponent } from './timelog/timelog.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelogSelectComponent } from './timelog-select/timelog-select.component';

@NgModule({
  declarations: [
    TimesheetByWeekComponent,
    TimelogComponent,
    HeadComponent,
    TimelogSelectComponent,
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
  ],
  entryComponents: [
  ],
  exports: [
    TimelogComponent
  ]
})
export class TimelogsModule { }
