import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';
import { EmployeesModule } from '../employees/employees.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { NotificationPreferencesComponent } from './notification-preferences/notification-preferences.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    SendEmailComponent,
    CreateCompanyComponent,
    NotificationPreferencesComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CoreModule,
    EmployeesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  exports: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePageModule { }
