import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ApprovalPeriodComponent } from './approval-period/approval-period.component';
import { CommentsComponent } from './comments/comments.component';
import { CompanySettingsComponent } from './company-settings.component';
import { CompanyPropertiesComponent } from './company-properties/company-properties.component';
import { CompanyIntegrationComponent } from './company-integration/company-integration.component';

import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CompanyIntegrationComponent,
    CommentsComponent,
    CompanySettingsComponent,
    CompanyPropertiesComponent,
    ApprovalPeriodComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CompanySettingsComponent]
})
export class CompanySettingModule {}
