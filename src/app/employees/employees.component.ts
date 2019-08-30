import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { CompanyService } from '../myTest/company.service';
import { MyUserService, IUser } from '../myTest/user.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {
  // public employees: string[];
  public employees: any[];
  public objEmployees: any[];
  public groupEmployee = { value: 'active' };
  constructor(private employeesService: EmployeesService, private companyService: CompanyService, private userService: MyUserService) {
    this.employeesService.setEmployeeList(this.companyService.getCurrentCompany().employeeList);
    this.employeesService.setUserList(this.userService.userList);
  }
  unsubscriber = this.companyService.currentCompanyPage.subscribe(() => {
    this.employeesService.setEmployeeList(this.companyService.getCurrentCompany().employeeList);
    this.employeesService.setUserList(this.userService.userList);
    this.getEmployees(this.groupEmployee);
  });

  ngOnInit() {
    this.getEmployees();

  }

  getEmployees(event = this.groupEmployee) {
    this.groupEmployee.value = event.value;
    this.employees = (this.employeesService.getEmployees(event.value)).map(item => this.getTableTemplate(item));
  }

  getTableTemplate(item) {
    return { 'Name': item.name, 'Role': item.role, 'Planned / Actual (hours per week)': '44444', 'Pending Approval': 'bbbbbb' };
  }

  ngOnDestroy(): void {
    this.unsubscriber.unsubscribe();
  }

}
