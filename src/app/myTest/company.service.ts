import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

export interface ICompany {
  id?: any;
  name: string;
  activities?: [{ label: string; checked: boolean }];
  defaultProject?: { projects: string[]; selectedProject: string[] };
  startWeekDay?: { days: string[]; selectedDay: string };
  workload?: [number, string];
  approvalPeriod?: { periods: string[]; selectedPeriod: string };
  autoSubmit?: boolean;
  notDifTime?: {
    defaultImplementation: string[];
    notificationRule1: {
      notification: boolean;
      time: number;
      implementation: string;
    };
    notificationRule2: {
      notification: boolean;
      time: number;
      implementation: string;
    };
  };
  abilityForget?: boolean;
  date?: string;
  employeeList: { active: string[], deactivated: string[], pending: string[] };
}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:5000';
  public currentCompany: any;
  public companyList: any[];

  private companyName = new BehaviorSubject('');
  currentCompanyName = this.companyName.asObservable();
  // private companyPage = new BehaviorSubject('');
  currentCompanyPage = this.companyName.asObservable();

  emptyCompany = {
    id: '',
    name: '',
    activities: [
      { label: 'Vacation', checked: false },
      { label: 'Sick Leave', checked: false },
      { label: 'Business Trip', checked: false }
    ],
    defaultProject: {
      projects: ['Adaptation', 'Test period', 'Party'],
      selectedProject: []
    },
    startWeekDay: { days: ['Monday', 'Sunday'], selectedDay: 'Monday' },
    workload: [40, 'week'],
    approvalPeriod: {
      periods: ['1 week', '2 weeks', '1 month', 'I don’t need approvals'],
      selectedPeriod: '1 month'
    },
    autoSubmit: true,
    notDifTime: {
      defaultImplementation: ['error', 'warm'],
      notificationRule1: {
        notification: true,
        time: 10,
        implementation: 'error'
      },
      notificationRule2: {
        notification: true,
        time: 15,
        implementation: 'warm'
      }
    },
    abilityForget: false
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private db: AngularFirestore
  ) {
    this.currentCompany = this.emptyCompany;
    this.getAllCompanies();
  }

  changeCompanyName(message: string) {
    this.companyName.next(message);
  }

  saveCompany = (company: ICompany): void => {
    this.companyList.some(comp => comp.id === company.id)
      ? this.setCompany(company)
      : this.registerCompany(company);
  };

  registerCompany = (company: ICompany) =>
    this.db
      .collection('companies')
      .add(company)
      .then(doc => {
        company.id = doc.id;
        this.setCompany(company);
      });

  setCompany = (company: ICompany) =>
    this.db
      .collection('companies')
      .doc(company.id)
      .set(company)
      .then(() => this.getAllCompanies());

  getCurrentCompany() {
    return this.currentCompany;
  }
  createCompany() {
    this.currentCompany = this.emptyCompany;
    this.router.navigate(['company-settings']);
    this.changeCompanyName(this.currentCompany.name);
    this.getCurrentCompany();
  }

  getCompany(companyName) {
    this.companyList.forEach(company => {
      if (company.name === companyName) {
        this.currentCompany = company;
      }
    });
  }
  getAllCompanies(): void {
    this.db
      .collection('companies')
      .valueChanges()
      .subscribe(
        company => {
          this.companyList = company;
        },
        error => {
          console.log(`Error:${error}`);
        }
      );
  }
  // !!my Back-end
  // getCompany(company) {
  //   this.http.get(`${this.url}/api/companies/${company}`).subscribe(
  //     data => {
  //       this.currentCompany = data;
  //       this.changeCompanyName(this.currentCompany.name);
  //     },
  //     error => {
  //       this.error = error.message;
  //       console.log(error);
  //     }
  //   );
  // }
  regCompany(company: any) {
    this.http.post(`${this.url}/api/companies/register`, company).subscribe(
      data => {
        this.currentCompany = data;
        this.changeCompanyName(this.currentCompany.name);
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
