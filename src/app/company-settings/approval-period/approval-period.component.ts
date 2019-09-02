import { Component, OnInit, Input } from '@angular/core';
import { ICompany } from '../../myTest/company.service';

@Component({
  selector: 'app-approval-period',
  templateUrl: './approval-period.component.html',
  styleUrls: ['./approval-period.component.sass']
})
export class ApprovalPeriodComponent implements OnInit {
  @Input() company: ICompany;

  public approvDis = false;

  constructor() { }
  onChange(event) {
    this.approvDis = event === 'I don’t need approvals' ? true : false;
  }

  ngOnInit() { }

  changeAutoSubmit() {
    this.company.autoSubmit = !this.company.autoSubmit;
  }
  changeAbilityForget() {
    this.company.abilityForget = !this.company.abilityForget;
  }
}
