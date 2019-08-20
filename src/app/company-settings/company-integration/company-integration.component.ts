import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-integration',
  templateUrl: './company-integration.component.html',
  styleUrls: ['./company-integration.component.sass']
})
export class CompanyIntegrationComponent implements OnInit {
  @Input() user;
  integrationApp: string[];
  integratedApp: string[];
  ngOnInit() {
    this.integrationApp = this.user.integrationApp.map(
      item => `../../../assets/image/integration/${item}.svg`
    );
    this.integratedApp = this.user.integratedApp.map(
      item => `../../../assets/image/integration/${item}.svg`
    );
  }
}
