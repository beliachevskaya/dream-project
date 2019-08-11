import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy
} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';

// @ts-ignore
import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD MMM',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent {

  date = new FormControl(moment());

  exampleHeader = HeaderComponent;

  incrementDate() {
    const date = this.date;
    date.setValue(moment(date.value).add(1, 'days'));
  }

  decrementDate() {
    const date = this.date;
    date.setValue(moment(date.value).add(-1, 'days'));
  }
}

/** Custom header component for datepicker. */
@Component({
  selector: 'app-header',
  styles: [`
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }

    .example-double-arrow .mat-icon {
      margin: -22%;
    }
  `],
  template: `
    <div class="example-header">
      <button mat-stroked-button color="primary" (click)="todayClicked()">Today</button>
      <span class="example-header-label">{{periodLabel}}</span>
        <button mat-icon-button (click)="previousClicked()">
            <mat-icon>keyboard_arrow_left</mat-icon>
        </button>
      <button mat-icon-button (click)="nextClicked()">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent<D> implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>, private dateAdapter: DateAdapter<D>,
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
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    this.calendar.activeDate = this.dateAdapter.createDate( year, month, day);
  }

  previousClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
  }

  nextClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
  }
}

