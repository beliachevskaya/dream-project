import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    defaultProjects: [],
    startWeekDay: 'Monday',
    workload: [40, 'week']
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
