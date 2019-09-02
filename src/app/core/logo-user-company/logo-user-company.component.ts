import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../myTest/company.service';
import { IUser } from '../../myTest/user.service';

@Component({
  selector: 'app-logo-user-company',
  templateUrl: './logo-user-company.component.html',

  styleUrls: ['./logo-user-company.component.sass']
})
export class LogoUserCompanyComponent implements OnInit, OnChanges {
  @Input() currentUser: IUser;
  @Input() firstCompany: string;
  selectedCompany: any;
  private unsubcriber2 = this.companyService.currentCompanyName.subscribe(company => {
    this.selectedCompany = company;
  })


  constructor(private router: Router, private companyService: CompanyService) { }
  isHide = () => this.currentUser.companyList.length < 2;
  ngOnInit() {
    this.router.navigate(['profile']);
    this.selectedCompany = this.firstCompany;
    this.currentUser.companyList = this.currentUser.companyList.filter(company => company !== '+ Create company');
    this.currentUser.companyList.push('+ Create company');
  }

  @Output() onChanged = new EventEmitter<string>();

  onChange(company) {
    this.onChanged.emit(company);
  }

  ngOnChanges() {
    // this.selectedCompany = this.firstCompany;
    if (this.firstCompany && this.selectedCompany) {
      if (!this.currentUser.companyList.some(item => item === this.firstCompany)) this.currentUser.companyList.unshift(this.selectedCompany)
    }
  }
  onKlick() {
    this.companyService.createCompany();
  }
}
