import { Component, OnInit } from '@angular/core';
import { MyUserService, IUser } from '../../myTest/user.service';
import { CompanyService, ICompany } from '../../myTest/company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: MyUserService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
  }
  rebootData() {
    console.log("header");
    this.userService.setEmptyUser();
    this.companyService.setEmptyCompany();
    this.router.navigate(['login']);
  }

}
