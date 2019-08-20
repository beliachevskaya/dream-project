import { Component, OnInit, Input } from '@angular/core';

interface IapprovalPeriod {
  approvalPeriod: any[];
  autoSubmit: boolean;
  notDifTime: any[];
  abilityForget: boolean;
}

@Component({
  selector: 'app-approval-period',
  templateUrl: './approval-period.component.html',
  styleUrls: ['./approval-period.component.sass']
})
export class ApprovalPeriodComponent implements OnInit {
  @Input() company;

  public arr = ['warm', 'error'];
  public approvDis = false;

  constructor() {}
  onChange(event) {
    this.approvDis = event === 'I don’t need approvals' ? true : false;
  }

  ngOnInit() {}
}
