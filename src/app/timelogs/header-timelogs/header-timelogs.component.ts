import {Component, OnInit, ViewChild} from '@angular/core';
import {DatepickerComponent} from '../datepicker/datepicker.component';

@Component({
  selector: 'app-header-timelogs',
  templateUrl: './header-timelogs.component.html',
  styleUrls: ['./header-timelogs.component.sass'],
  })
export class HeaderTimelogsComponent implements OnInit {

  @ViewChild(DatepickerComponent, {static: false})
  public datepicker: DatepickerComponent;

  constructor() {
  }

  ngOnInit() {
  }

  save(): void {
    console.log(typeof this.datepicker.date.value._d);
  }

}
