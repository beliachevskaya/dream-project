import { Injectable } from '@angular/core';
import { MyUserService, IUser } from '../myTest/user.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  public employeeList: any[];
  public userList: any[];
  public currentImployee: IUser;

  constructor() { }

  setEmployeeList = employees => this.employeeList = employees;
  setCurrentImployees = employeeName => this.currentImployee = this.userList.filter(user => user.name === employeeName)[0];
  getCurrentImployees = () => this.currentImployee;
  setUserList = users => this.userList = users;
  getEmployees(type) {
    return this.employeeList[type].map(user => this.userList.filter(obj => obj.name === user)).flat();
  }

}
