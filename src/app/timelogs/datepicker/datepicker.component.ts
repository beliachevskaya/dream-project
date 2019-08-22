import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';

// @ts-ignore
import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {CustomHeaderComponent} from './custom-header/custom-header.component';

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

  customHeader = CustomHeaderComponent;

  incrementDate() {
    const date = this.date;
    date.setValue(moment(date.value).add(1, 'days'));
  }

  decrementDate() {
    const date = this.date;
    date.setValue(moment(date.value).add(-1, 'days'));
  }
}
