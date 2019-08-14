import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../../myTest/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.sass']
})
export class CreateCompanyComponent implements OnInit {
  constructor(private companyService: CompanyService) {}
  createCompany() {
    this.companyService.createCompany();
  }

  ngOnInit() {}
}
