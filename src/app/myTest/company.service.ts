import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
export interface ICompany {
  id: any;
  name: string;
  activities?: [{ label: string; checked: boolean }, { label: string; checked: boolean }, { label: string; checked: boolean }];
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
  commentRequire?: boolean;
  owner: string[];
}
export class EmptyCompany implements ICompany {
  id: any;
  name: string;
  activities?: [{ label: string; checked: boolean; }, { label: string; checked: boolean; }, { label: string; checked: boolean; }];
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
  commentRequire?: boolean;
  owner: string[];
  constructor() {
    this.id = '';
    this.name = '';
    this.activities = [
      { label: 'Vacation', checked: false },
      { label: 'Sick Leave', checked: false },
      { label: 'Business Trip', checked: false }
    ];
    this.defaultProject = {
      projects: ['Adaptation', 'Test period', 'Party'],
      selectedProject: []
    };
    this.startWeekDay = { days: ['Monday', 'Sunday'], selectedDay: 'Monday' };
    this.workload = [40, 'week'];
    this.approvalPeriod = {
      periods: ['1 week', '2 weeks', '1 month', 'I don’t need approvals'],
      selectedPeriod: '1 month'
    };
    this.autoSubmit = true;
    this.notDifTime = {
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
    };
    this.abilityForget = false;
    this.commentRequire = false;
    this.employeeList = { active: [], deactivated: [], pending: [] },
      this.owner = [];
  }
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:5000';
  public currentCompany: ICompany;
  public companyList: any[];
  private companyName = new BehaviorSubject('');
  currentCompanyName = this.companyName.asObservable();
  currentCompanyPage = this.companyName.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private db: AngularFirestore
  ) {
    this.currentCompany = new EmptyCompany();
    this.getAllCompanies();
  }

  changeCompanyName(message: string) {
    this.companyName.next(message);
  }

  saveCompany = (company: ICompany, user: string): void => {
    if (this.companyList.some(comp => ((comp.id === company.id) && (comp.id !== '')))) {
      (company.owner.some(owner => owner === user)) ? this.setCompany(company) : console.log("You're not owner");
    } else { this.registerCompany(company, user); }
  }

  registerCompany = (company: ICompany, user: string) => {
    company.employeeList.active.push(user);
    company.owner.push(user);
    this.db
      .collection('companies')
      .add((JSON.parse(JSON.stringify(company))))
      .then(doc => {
        company.id = doc.id;
        this.setCompany(company);
      });
  }

  setCompany = (company: ICompany) =>
    this.db
      .collection('companies')
      .doc(company.id)
      .set((JSON.parse(JSON.stringify(company))))
      .then(() => this.getAllCompanies());

  getCurrentCompany(): ICompany {
    return this.currentCompany;
  }
  createCompany(): ICompany {
    this.currentCompany = new EmptyCompany();
    this.router.navigate(['company-settings']);
    this.changeCompanyName(this.currentCompany.name);
    return this.getCurrentCompany();
  }

  getCompany(companyName): ICompany {
    this.companyList.forEach(company => {
      if (company.name === companyName) { this.currentCompany = company; }
    });
    return this.currentCompany;
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
  setEmptyCompany(): void {
    this.currentCompany = new EmptyCompany();
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
        // this.currentCompany = data;
        this.changeCompanyName(this.currentCompany.name);
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
