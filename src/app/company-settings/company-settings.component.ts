import { Component, OnInit } from '@angular/core';
import { CompanyService, ICompany } from '../myTest/company.service';
import { MyUserService, IUser } from '../myTest/user.service';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.sass']
})
export class CompanySettingsComponent implements OnInit {
  public company: ICompany;
  public currentUser: IUser;
  public user = {
    integrationApp: ['Jira', 'Slack'],
    integratedApp: ['Asana', 'Trello', 'IdeaJet', 'Git', 'Telegram', 'WhattsApp', 'GitHub']
  };
  unsubscriber = this.companyService.currentCompanyPage.subscribe(() => {
    this.company = this.companyService.getCurrentCompany();
  });
  constructor(
    private userService: MyUserService,
    private companyService: CompanyService
  ) { }
  onSaved(company: ICompany) {
    this.company = company;
    this.currentUser = this.userService.getCurrentUser();
    this.companyService.saveCompany(this.company, this.currentUser.name);
    this.companyService.changeCompanyName(this.company.name);
    this.userService.addCompanyToUser(this.company.name);
  }
  ngOnInit() {
    this.company = this.companyService.getCurrentCompany();
  }

  ngOnDestroy(): void {
    this.unsubscriber.unsubscribe();
  }
}
