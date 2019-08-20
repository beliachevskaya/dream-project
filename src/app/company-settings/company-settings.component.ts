import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../myTest/company.service';
import { MyUserService, Iuser } from '../myTest/user.service';

export const enum WeekDay {
  Sun = 'Sunday',
  Mon = 'Monday'
}

export interface IcompanyProperties {
  name: string;
  activities: any[];
  defaultProject: any[];
  startWeekDay: any[];
  workload: [number, string];
}

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.sass']
})
export class CompanySettingsComponent implements OnInit {
  public Company: any;
  public user = {
    integrationApp:
    ['Jira', 'Slack'],
    integratedApp:
    ['Asana','Trello', 'IdeaJet', 'Git', 'Telegram', 'WhattsApp', 'GitHub']
  }

  // public Company2 = {
  //   approvalPeriod: [
  //     ['1 week', '2 weeks', '1 month', 'I don’t need approvals'],
  //     ['1 month']
  //   ],
  //   autoSubmit: true,
  //   notDifTime: [
  //     {
  //       notification: true,
  //       time: 10,
  //       imp: 'error'
  //     },
  //     {
  //       notification: true,
  //       time: 125,
  //       imp: 'warm'
  //     }
  //   ],
  //   abilityForget: true
  // };

  constructor(
    private userService: MyUserService,
    private companyService: CompanyService
  ) {}
  onSaved(company: IcompanyProperties) {
    this.Company = company;
    this.companyService.regCompany(this.Company);
    this.companyService.changeCompanyName(this.Company.name);
    console.log(this.userService.setUser(this.Company.name));
  }
  ngOnInit() {
    this.Company = this.companyService.get();
    this.companyService.currentCompanyPage.subscribe(company => {
      this.Company = this.companyService.get();
    });
  }
}
