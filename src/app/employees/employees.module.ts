import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { EmployeeTimesheetsComponent } from './employee-information/employee-timesheets/employee-timesheets.component';
import { EmployeePeriodsComponent } from './employee-information/employee-periods/employee-periods.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { EmployeesComponent } from './employees.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    EmployeeInformationComponent,
    EmployeeTimesheetsComponent,
    EmployeesPageComponent,
    EmployeesComponent,
    EmployeePeriodsComponent

  ],
  imports: [
    RouterModule,
    MaterialModule,
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [EmployeesComponent, EmployeeInformationComponent, EmployeePeriodsComponent, EmployeeTimesheetsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule { }
