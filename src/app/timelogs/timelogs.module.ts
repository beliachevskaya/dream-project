import { NgModule } from '@angular/core';

import { HeaderTimelogsComponent } from './header-timelogs/header-timelogs.component';
import { TimelogDayComponent } from './timelog-day/timelog-day.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelogSelectComponent } from './timelog-select/timelog-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimelogWeekComponent } from './timelog-week/timelog-week.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { CustomHeaderComponent } from './datepicker/custom-header/custom-header.component';

@NgModule({
  declarations: [
    TimelogDayComponent,
    HeaderTimelogsComponent,
    TimelogSelectComponent,
    DatepickerComponent,
    TimelogWeekComponent,
    CustomHeaderComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DatepickerComponent,
    CustomHeaderComponent
  ],
  exports: [
    TimelogDayComponent
  ],
  providers: [DataService]
})
export class TimelogsModule { }
