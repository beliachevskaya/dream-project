import { Component, OnInit } from '@angular/core';

interface IuserProfile {
  id: number;
  name: string;
  companyList: any[];
}

@Component({
  selector: 'app-logo-user-company',
  templateUrl: './logo-user-company.component.html',
  styleUrls: ['./logo-user-company.component.sass']
})
export class LogoUserCompanyComponent implements OnInit {
  private cp: IuserProfile = {
    id: 101,
    name: 'Profile 1',
    companyList: ['Company1', 'Company2']
  };
  public id: number;
  public name: string;
  public companyList: any[];
  constructor() {
    this.id = this.cp.id;
    this.name = this.cp.name;
    this.companyList = this.cp.companyList;
    this.companyList.push('+ Create company');
  }
  isHide = () => this.companyList.length === 0;
  ngOnInit() {}
}
