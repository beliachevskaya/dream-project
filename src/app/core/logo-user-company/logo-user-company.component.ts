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

  constructor(private router: Router, private companyService: CompanyService) { }
  isHide = () => this.currentUser.companyList.length < 2;
  ngOnInit() {
    this.router.navigate(['profile']);
    this.selectedCompany = this.currentUser.companyList[0];
    this.currentUser.companyList.push('+ Create company');
  }

  @Output() onChanged = new EventEmitter<string>();

  onChange(company) {
    this.onChanged.emit(company);
  }
  ngOnChanges() {
    if (this.firstCompany) {
      if (
        this.currentUser.companyList.some(item => item === this.firstCompany)
      ) {
        this.selectedCompany = this.firstCompany;
      } else {
        this.selectedCompany = this.firstCompany;
        this.currentUser.companyList.unshift(this.selectedCompany);
      }
    }
  }
  onKlick() {
    this.companyService.createCompany();
  }
}
