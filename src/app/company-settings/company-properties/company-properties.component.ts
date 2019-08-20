import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IcompanyProperties, WeekDay } from '../company-settings.component';

@Component({
  selector: 'app-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: ['./company-properties.component.sass']
})
export class CompanyPropertiesComponent implements OnInit {
  _company: IcompanyProperties;
  public checked: boolean;
  public buttonDisabled = true;

  @Input()
  set company(Company: IcompanyProperties) {
    this._company = Company;
  }

  @Output() onSaved = new EventEmitter<IcompanyProperties>();
  onSave(data: IcompanyProperties) {
    this.onSaved.emit(data);
  }

  onToggle(checked) {
    checked = !checked;
    this.onChangeAll();
  }

  constructor() {}

  ngOnInit() {
    console.log(this._company);
  }

  onChange(event, select) {
    this._company.defaultProject[1].push(event);
    select.value = '';
    this.onChangeAll();
  }
  onChangeAll() {
    this.buttonDisabled = false;
  }
  onChangeProject(event, i) {
    this._company.defaultProject[1][i] = event;
    this.onChangeAll();
  }
}
