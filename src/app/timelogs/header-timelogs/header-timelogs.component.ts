import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import * as _moment from 'moment';

// @ts-ignore
import {default as _rollupMoment} from 'moment';

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
  selector: 'app-header-timelogs',
  templateUrl: './header-timelogs.component.html',
  styleUrls: ['./header-timelogs.component.sass'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class HeaderTimelogsComponent implements OnInit {

  date = new FormControl(moment());

  constructor() {
  }

  ngOnInit() {
  }

  dat(): void {
    this.date.setValue(moment(this.date.value).add(1, 'days'));
    console.log(this.date.value);
  }

  incrementDate() {
    const date = this.date;
    date.setValue(moment(date.value).add(1, 'days'));
    console.log(this.date.value);
  }

  decrementDate() {
    const date = this.date;
    date.setValue(moment(date.value).add(-1, 'days'));
    console.log(this.date.value);
  }
}
