import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICompany } from '../../myTest/company.service';

@Component({
  selector: 'app-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: ['./company-properties.component.sass']
})
export class CompanyPropertiesComponent implements OnInit {
  @Input() company: ICompany;
  public checked: boolean;
  public buttonDisabled = true;

  // @Input()
  // set company(Company: ICompany) {
  //   this._company = Company;
  // }

  @Output() onSaved = new EventEmitter<ICompany>();
  onSave(company: ICompany) {
    this.onSaved.emit(company);
  }

  onToggle(checked) {
    checked = !checked;
    this.onChangeAll();
  }

  constructor() { }

  ngOnInit() { }

  onChange(project, select) {
    this.company.defaultProject.selectedProject.push(project);
    select.value = '';
    this.onChangeAll();
  }
  onChangeAll() {
    this.buttonDisabled = false;
  }
  onChangeProject(event, i) {
    this.company.defaultProject.selectedProject[i] = event;
    this.onChangeAll();
  }
}
