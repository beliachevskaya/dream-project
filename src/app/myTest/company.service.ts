import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Icompany {
  name: string;
  activities?: any[];
  defaultProject?: any[];
  startWeekDay?: any[];
  workload?: any[];
  approvalPeriod?: string;
  autoSubmit?: boolean;
  notDifTime?: any[];
  abilityForget?: boolean;
  date?: string;
}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:5000';
  public currentCompany: any;
  error: any;
  name: string;

  private companyName = new BehaviorSubject('');
  currentCompanyName = this.companyName.asObservable();
  // private companyPage = new BehaviorSubject('');
  currentCompanyPage = this.companyName.asObservable();

  emptyCompany = {
    name: '',
    activities: [
      { label: 'Vacation', checked: false },
      { label: 'Sick Leave', checked: false },
      { label: 'Business Trip', checked: false }
    ],
    defaultProject: [['Adaptation', 'Test period', 'Party'], []],
    startWeekDay: [['Monday', 'Sunday'], ['Monday']],
    workload: [40, 'week'],
    approvalPeriod: [
      ['1 week', '2 weeks', '1 month', 'I don’t need approvals'],
      ['1 month']
    ],
    autoSubmit: true,
    notDifTime: [
      {
        notification: true,
        time: 10,
        imp: 'error'
      },
      {
        notification: true,
        time: 15,
        imp: 'warm'
      }
    ],
    abilityForget: false
  };

  constructor(private http: HttpClient, private router: Router) {
    this.currentCompany = this.emptyCompany;
  }
  changeCompanyName(message: string) {
    this.companyName.next(message);
  }
  // changeCompanyPage(page: string) {
  //   console.log(page + 'changeCompanyPage!!');
  //   this.companyPage.next(page);
  // }

  regCompany(company: any) {
    this.http.post(`${this.url}/api/companies/register`, company).subscribe(
      data => {
        this.currentCompany = data;
        this.changeCompanyName(this.currentCompany.name);
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
  }

  getCompany(company) {
    this.http.get(`${this.url}/api/companies/${company}`).subscribe(
      data => {
        this.currentCompany = data;
        this.changeCompanyName(this.currentCompany.name);
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
  }
  get() {
    return this.currentCompany;
  }
  createCompany() {
    this.currentCompany = this.emptyCompany;
    this.router.navigate(['company-settings']);
    this.changeCompanyName(this.currentCompany.name);
    this.get();
  }
}
