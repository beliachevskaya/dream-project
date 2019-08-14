import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IcompanyProperties, WeekDay } from '../company-settings.component';

@Component({
  selector: 'app-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: ['./company-properties.component.sass']
})
export class CompanyPropertiesComponent implements OnInit {
  _company: IcompanyProperties;
  public startWeekDay = [['Sunday', 'Monday'], 'Monday'];
  public checked: boolean;

  @Input()
  set company(Company: IcompanyProperties) {
    this._company = Company;
    this._company.defaultProject = ['Adaptation', 'Test period'];
    this._company.defaultProject.push('Choose project');
    this.startWeekDay[1] = this._company.startWeekDay;
  }

  @Output() onSaved = new EventEmitter<IcompanyProperties>();
  onSave(data: IcompanyProperties) {
    this.onSaved.emit(data);
  }

  onToggle(checked) {
    checked = !checked;
  }

  constructor() {}

  ngOnInit() {}
}
