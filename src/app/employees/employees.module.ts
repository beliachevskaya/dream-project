import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { EmployeeInformationComponent } from './employee-information/employee-information.component';
// import { AddEmployeePopUpComponent } from './add-employee-pop-up/add-employee-pop-up.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { EmployeesComponent } from './employees.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';
// import {ComponentsModule} from '../components/components.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // EmployeeInformationComponent,
    // AddEmployeePopUpComponent,
    EmployeesPageComponent,
    EmployeesComponent
    // AddEmployeeComponent,
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CoreModule,
    // ComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EmployeesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule { }
