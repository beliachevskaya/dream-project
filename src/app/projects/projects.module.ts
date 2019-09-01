import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsCreateComponent } from './projects-create/projects-create.component';
import { ProjectsTeamComponent } from './projects-team/projects-team.component';
import { ProjectsHeaderComponent } from './projects-header/projects-header.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsCreateComponent,
    ProjectsHeaderComponent,
    ProjectsTeamComponent,
    ProjectEditComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  exports: [
    ProjectsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsModule {}
