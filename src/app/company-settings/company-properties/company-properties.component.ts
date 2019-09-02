import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICompany } from '../../myTest/company.service';

@Component({
  selector: 'app-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: ['./company-properties.component.sass']
})
export class CompanyPropertiesComponent implements OnInit {
  _company: ICompany;
  public checked: boolean;
  public buttonDisabled = true;

  @Input()
  set company(Company: ICompany) {
    this._company = Company;
  }

  @Output() onSaved = new EventEmitter<ICompany>();
  onSave(data: ICompany) {
    this.onSaved.emit(data);
  }

  onToggle(checked) {
    checked = !checked;
    this.onChangeAll();
  }

  constructor() {}

  ngOnInit() {}

  onChange(project, select) {
    this._company.defaultProject.selectedProject.push(project);
    select.value = '';
    this.onChangeAll();
  }
  onChangeAll() {
    this.buttonDisabled = false;
  }
  onChangeProject(event, i) {
    this._company.defaultProject.selectedProject[i] = event;
    this.onChangeAll();
  }
}
