import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, EventEmitter, Output
} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';

// @ts-ignore
import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {CustomHeaderComponent} from './custom-header/custom-header.component';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

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

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  date = new FormControl(moment());

  customHeader = CustomHeaderComponent;

  @Output() changeDate = new EventEmitter<boolean>();
  setDate() {
    this.changeDate.emit();
  }

  incrementDate(): void {
    this.date.setValue(moment(this.date.value).add(1, 'days'));
    this.setDate();
  }

  decrementDate(): void {
    this.date.setValue(moment(this.date.value).add(-1, 'days'));
    this.setDate();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.setDate();
  }
}
