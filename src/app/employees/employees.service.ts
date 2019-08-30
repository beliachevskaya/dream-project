import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable, of, from, } from 'rxjs';
// import 'rxjs/add/operator/map';
import { AngularFirestore } from '@angular/fire/firestore';
import { CompanyService } from '../myTest/company.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  public employeeList: any[];
  public userList: any[];

  constructor(private db: AngularFirestore) {

  }

  setEmployeeList = employees => this.employeeList = employees;
  setUserList = users => this.userList = users;
  getEmployees(type) {
    return this.employeeList[type].map(user => this.userList.filter(obj => obj.name === user)).flat();
  }

}
