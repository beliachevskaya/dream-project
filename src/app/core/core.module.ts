import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
// import {ComponentsModule} from "../components/components.module";

// import {BlockComponent} from "./block/block.component";
import { ContainerComponent } from "./container/container.component";
// import {HeaderComponent} from "./header/header.component";
// import {LogoUserCompanyComponent} from "./logo-user-company/logo-user-company.component";
// import {MenuComponent} from "./menu/menu.component";
// import { PageComponent } from "./page/page.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    // BlockComponent,
    ContainerComponent
    // HeaderComponent,
    // LogoUserCompanyComponent,
    // MenuComponent,
    // PageComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    // ComponentsModule,
    CommonModule
  ],
  exports: [
    // BlockComponent,
    ContainerComponent
    // HeaderComponent,
    // LogoUserCompanyComponent,
    // MenuComponent,
    // PageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
