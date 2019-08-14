import { Component, OnInit } from '@angular/core';
import { MyUserService, Iuser } from '../../myTest/user.service';
import { CompanyService } from '../../myTest/company.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  currentUser: Iuser;
  currentCompany: any;
  firstCompany: string;
  constructor(
    private userService: MyUserService,
    private companyService: CompanyService
  ) {}

  onChanged(company) {
    // this.companyService.changeCompanyPage(company);
    company === '+ Create company'
      ? (this.currentCompany = this.companyService.createCompany())
      : (this.currentCompany = this.companyService.getCompany(company));
  }

  ngOnInit() {
    this.currentUser = this.userService.get();
    console.log(this.currentUser);
    if (this.currentUser.registered !== false) {
      this.currentCompany = this.companyService.getCompany(
        this.currentUser.companyList[0]
      );
    } else {
      this.currentCompany = this.companyService.get();
    }
    this.firstCompany = this.currentUser.companyList[0];
    this.companyService.currentCompanyName.subscribe(company => {
      this.firstCompany = company;
    });
  }
}
