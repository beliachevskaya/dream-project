import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CompanySettingModule } from './company-settings/company-settings.module';
import { ProjectsModule } from './projects/projects.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { EmployeesModule } from './employees/employees.module';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RestorePasswordComponent } from './auth/restore-password/restore-password.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { LinkExpiredComponent } from './auth/link-expired/link-expired.component';

import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
import { ProjectsService } from './projects/projects.service';

// max test
import { MyUserService } from './myTest/user.service';
import { CompanyService } from './myTest/company.service';
import { EmployeesService } from './employees/employees.service';
import { TestService } from './employees/test.service';
import { MyComponent } from './myTest/my.component';
import { HttpClientModule } from '@angular/common/http';

import { TimelogsModule } from './timelogs/timelogs.module';


import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RestorePasswordComponent,
    SetNewPasswordComponent,
    LinkExpiredComponent,
    MyComponent // max test
    // CompanySettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CoreModule,
    CompanySettingModule,
    TimelogsModule,
    HttpClientModule,
    ProfilePageModule,
    ProjectsModule,
    EmployeesModule,
    // AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ChartsModule
  ],
  providers: [AuthService, MyUserService, CompanyService, ProjectsService, EmployeesService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
