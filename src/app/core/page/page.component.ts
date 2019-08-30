import { Component, OnInit } from '@angular/core';
import { MyUserService, IUser } from '../../myTest/user.service';
import { CompanyService } from '../../myTest/company.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  DEFAULT_COMPANY = 0;
  currentUser: IUser;
  currentCompany: any;
  firstCompany: string;
  constructor(
    private userService: MyUserService,
    private companyService: CompanyService
  ) { }

  onChanged(company) {
    if (company === '+ Create company') {
      this.currentCompany = this.companyService.createCompany();
    } else {
      this.currentCompany = this.companyService.getCompany(company);
      this.firstCompany = this.currentCompany;

      this.companyService.changeCompanyName(company);
    }
  }

  ngOnInit() {
    this.currentUser = this.userService.get();
    if (this.currentUser.role === 'Owner') {
      this.companyService.getCompany(
        this.currentUser.companyList[this.DEFAULT_COMPANY]
      );
    }

    this.companyService.currentCompanyName.subscribe(company => {
      this.firstCompany = company;
    });
  }
}
