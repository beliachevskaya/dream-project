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
    autoSubmit: false,
    notDifTime: [
      {
        notification: true,
        time: 10,
        сaution: 'error'
      },
      {
        notification: true,
        time: 125,
        сaution: 'warn'
      }
    ],
    abilityForget: true
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

  public сaution1: string;
  public сaution2: string;

  constructor() {
    this.approvalPeriod = this.cp.approvalPeriod;
    this.autoSubmit = this.cp.autoSubmit;
    this.notDifTime = this.cp.notDifTime;
    this.abilityForget = this.cp.abilityForget;
    this.сaution1 = this.notDifTime[0].сaution;
    this.сaution2 = this.notDifTime[1].сaution;
    // console.log(this.сaution1);
  }
  // public test = this.cp.notDifTime[1]['caution'];

  ngOnInit() {}
}
