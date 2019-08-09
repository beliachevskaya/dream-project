import { Component, OnInit } from '@angular/core';
import { MyUserService, Iuser } from '../../../app/myTest/my.service';

// interface IuserProfile {
//   id: number;
//   name: string;
//   companyList: any[];
// }

@Component({
  selector: 'app-logo-user-company',
  templateUrl: './logo-user-company.component.html',
  styleUrls: ['./logo-user-company.component.sass'],
  providers: [MyUserService]
})
export class LogoUserCompanyComponent implements OnInit {
  private cp: Iuser = {
    name: 'Profile 1',
    email: 'dgfdgdf',
    companyList: ['Company1', 'Company2']
  };
  // public id: number;
  public currentUser: Iuser;
  public name: any;
  public companyList: any[];
  constructor(private newService: MyUserService) {
    // this.newService.getU().subscribe(async user => (this.currentUser = user));
    // this.name = this.newService.getU();
    // console.log('main');
    // console.log(this.name);
    this.name = this.cp.name;
    this.companyList = this.cp.companyList;
    this.companyList.push('+ Create company');
  }
  isHide = () => this.companyList.length === 0;
  ngOnInit() {}
}
