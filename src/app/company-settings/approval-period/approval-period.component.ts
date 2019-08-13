import { Component, OnInit } from '@angular/core';

interface IapprovalPeriod {
  approvalPeriod: string;
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
  private cp: IapprovalPeriod = {
    approvalPeriod: '1 month',
    autoSubmit: true,
    notDifTime: [
      {
        notification: true,
        time: 10,
        сaution: 'error'
      },
      {
        notification: false,
        time: 15,
        сaution: 'warn'
      }
    ],
    abilityForget: false
  };
  protected approvalPeriodItems: string[] = [
    '1 week',
    '2 weeks',
    '1 month',
    'I don’t need approvals'
  ];
  public approvalPeriod: string;
  public autoSubmit: boolean;
  public notDifTime: any[];
  public abilityForget: boolean;

  constructor() {
    this.approvalPeriod = this.cp.approvalPeriod;
    this.autoSubmit = this.cp.autoSubmit;
    this.notDifTime = this.cp.notDifTime;
    this.abilityForget = this.cp.abilityForget;
  }

  ngOnInit() {}
}
