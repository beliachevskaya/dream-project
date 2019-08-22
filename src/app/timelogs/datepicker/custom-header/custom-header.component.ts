import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DateAdapter, MAT_DATE_FORMATS, MatCalendar, MatDateFormats, MatDatepicker} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import * as _moment from 'moment';

// @ts-ignore
import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomHeaderComponent<D> implements OnDestroy {

  private destroyed = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>, private dateAdapter: DateAdapter<D>, private datepicker: MatDatepicker<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats, cdr: ChangeDetectorRef) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get periodLabel() {
    return this.dateAdapter
      .format(this.calendar.activeDate, this.dateFormats.parse.dateInput)
      .toLocaleUpperCase();
  }

  todayClicked() {
    this.datepicker.select(moment());
    this.datepicker.close();
  }

  previousClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
  }

  nextClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
  }

}
