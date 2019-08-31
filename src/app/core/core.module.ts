import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { ContainerComponent } from './container/container.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { LogoUserCompanyComponent } from './logo-user-company/logo-user-company.component';
import { MenuComponent } from './menu/menu.component';
import { PageComponent } from './page/page.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    LogoUserCompanyComponent,
    MenuComponent,
    PageComponent,
    TableComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    CommonModule,
    ChartsModule
  ],
  exports: [
    ContainerComponent,
    HeaderComponent,
    LogoUserCompanyComponent,
    MenuComponent,
    PageComponent,
    TableComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
