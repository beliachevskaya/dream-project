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
  public employees: any[];
  public objEmployees: any[];
  public groupEmployee = { value: 'active' };
  public emailValue: string;
  public emailRole = 'Employee';
  constructor(private employeesService: EmployeesService, private companyService: CompanyService, private userService: MyUserService) {
    this.employeesService.setEmployeeList(this.companyService.getCurrentCompany().employeeList);
    this.employeesService.setUserList(this.userService.userList);
  }

  private unsubscriber = this.companyService.currentCompanyPage.subscribe(() => {
    this.employeesService.setEmployeeList(this.companyService.getCurrentCompany().employeeList);
    this.employeesService.setUserList(this.userService.userList);
    this.getEmployees(this.groupEmployee);
  });

  private unsubscriber2 = this.userService.currentUserName.subscribe(() => {
    console.log('employ user chnage');
  });

  ngOnInit() {
    this.getEmployees();

  }

  getEmployees(event = this.groupEmployee): void {
    this.groupEmployee.value = event.value;
    this.objEmployees = this.employeesService.getEmployees(event.value);
    this.employees = this.objEmployees.map(item => this.getTableTemplate(item));
  }

  getTableTemplate(item: IUser): object {
    // tslint:disable-next-line: max-line-length
    return { Avatar: item.avatar, Name: item.name, Role: item.role, 'Planned / Actual (hours per week)': item.workload, 'Pending Approval': '12' };
  }



  ngOnDestroy(): void {
    this.unsubscriber.unsubscribe();
  }

}
