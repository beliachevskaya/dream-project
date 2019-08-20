import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// import { EmployeeInformationComponent } from './employee-information/employee-information.component';
// import { AddEmployeePopUpComponent } from './add-employee-pop-up/add-employee-pop-up.component';
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
    EmployeesComponent
    // AddEmployeeComponent,
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CoreModule,
    // ComponentsModule,
    CommonModule
  ],
  entryComponents: [
    // AddEmployeePopUpComponent
  ],
  exports: [
    // EmployeeInformationComponent,
    // AddEmployeePopUpComponent,
    EmployeesComponent
    // AddEmployeeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule {}
