import { Component, OnInit } from '@angular/core';
import { MyUserService, IUser } from '../../myTest/user.service';
import { CompanyService, ICompany } from '../../myTest/company.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  DEFAULT_COMPANY = 0;
  currentUser: IUser;
  currentCompany: ICompany;
  firstCompany: string;
  private unsubcriber = this.userService.currentUserName.subscribe(() => {
  });
  private unsubcriber2 = this.companyService.currentCompanyName.subscribe(company => {
    this.firstCompany = company;
  });
  constructor(
    private userService: MyUserService,
    private companyService: CompanyService
  ) { }

  onChanged(company) {
    if (company === '+ Create company') {
      this.currentCompany = this.companyService.createCompany();
    } else {
      this.currentCompany = this.companyService.getCompany(company);
      this.firstCompany = this.currentCompany.name;
      this.companyService.changeCompanyName(company);
    }
  }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    if (this.currentUser.companyList.length) {
      this.firstCompany = this.companyService.getCompany(this.currentUser.companyList[this.DEFAULT_COMPANY]).name;
    }
  }

  ngOnDestroy(): void {
    // this.unsubcriber.unsubscribe
    // this.unsubcriber2.unsubscribe
  }


}
