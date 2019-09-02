import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { MyUserService, IUser } from '../../myTest/user.service';
import { CompanyService, ICompany } from '../../myTest/company.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.sass']
})
export class EmployeeInformationComponent implements OnInit {
  public name: string;
  public employee: IUser;
  public currentUser: IUser;
  public employeeCompany: ICompany;
  public deactivateMenu: boolean = false;
  public abilityForget: boolean;
  public roles = [
    { value: 'Owner', description: 'Can do everything in the system: manage users, projects and company settings.' },
    { value: 'Admin', description: 'Can manage users: invite, deactivate users, change roles, workload on projects.' },
    {
      value: 'Project Manager',
      description: 'Has rights to manage projects, where he is assigned as Project Manager and manage users on his projects.'
    },
    { value: 'HR Manager', description: 'HR Manager is able to invite new users and manage projects.' },
    {
      value: 'Employee',
      description: 'Only fills his timesheet and is able to edit his profile info, including reports export from his timesheet.'
    },
  ]
  constructor(
    private activateRoute: ActivatedRoute,
    private employeesService: EmployeesService,
    private companyService: CompanyService,
    private userService: MyUserService
  ) {
    this.name = this.activateRoute.snapshot.params['name'];
    this.currentUser = this.userService.getCurrentUser();
    this.employeesService.setCurrentImployees(this.name);
    this.employee = this.employeesService.getCurrentImployees();
    this.employeeCompany = this.companyService.getCurrentCompany();
    this.abilityForget = this.employeeCompany.abilityForget;
    if (!this.employee.workload) { this.employee.workload = this.employeeCompany.workload; }

  }


  ngOnInit() {
  }

  openDeactivateMenu() {
    this.deactivateMenu = !this.deactivateMenu;
  }
  onSave(employee: IUser): void {
    console.log('save');
    console.log(employee);
    this.userService.setUser(employee);
  }
  onDeactivate(employee: IUser): void {
    this.employeeCompany.employeeList.active = this.employeeCompany.employeeList.active.filter(name => name !== employee.name);
    this.employeeCompany.employeeList.deactivated.push(employee.name);
    this.companyService.setCompany(this.employeeCompany);
    this.openDeactivateMenu();
  }


}
