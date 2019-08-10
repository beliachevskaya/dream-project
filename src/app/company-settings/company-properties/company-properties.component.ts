import { Component, OnInit, Input, Output } from '@angular/core';
import { IcompanyProperties, WeekDay } from '../company-settings.component';

@Component({
  selector: 'app-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: ['./company-properties.component.sass']
})
export class CompanyPropertiesComponent implements OnInit {
  _company: IcompanyProperties;
  public startWeekDay = [['Sunday', 'Monday'], 'Monday'];

  @Input()
  set company(Company: IcompanyProperties) {
    this._company = Company;
    this.startWeekDay[1] = this._company.startWeekDay;
  }

  constructor() {
    console.log(this._company);
  }

  ngOnInit() {
    console.log(this._company);
  }
}
