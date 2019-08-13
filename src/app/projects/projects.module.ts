import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    RouterModule,
    MaterialModule
  ],
  entryComponents: [],
  exports: [ProjectsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsModule {}
