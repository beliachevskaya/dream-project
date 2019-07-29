import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";

import { CoreModule } from "./core/core.module";
import { CompanySettingModule } from "./company-settings/company-settings.module";

import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { RestorePasswordComponent } from "./auth/restore-password/restore-password.component";
import { SetNewPasswordComponent } from "./auth/set-new-password/set-new-password.component";
import { LinkExpiredComponent } from "./auth/link-expired/link-expired.component";
// import { CompanySettingsComponent } from "./company-settings/company-settings.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RestorePasswordComponent,
    SetNewPasswordComponent,
    LinkExpiredComponent
    // CompanySettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    CompanySettingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
