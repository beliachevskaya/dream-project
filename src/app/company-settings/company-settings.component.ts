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
  // public Company: IcompanyProperties = {
  //   name: 'Microsoft inc.',
  //   activities: [
  //     { label: 'Vacation', checked: true },
  //     { label: 'Sick Leave', checked: false },
  //     { label: 'Business Trip', checked: true }
  //   ],
  //   defaultProjects: [
  //     { project: 'Adaptation', selected: true },
  //     { project: 'Adaptation2', selected: false },
  //     { project: 'Adaptation3', selected: false }
  //   ],
  //   startWeekDay: WeekDay.Mon,
  //   workload: [35, 'week']
  // };

  public Company: any;

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
