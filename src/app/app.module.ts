import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CompanySettingModule } from './company-settings/company-settings.module';
import { ProjectsModule } from './projects/projects.module';
import { ProfilePageModule } from './profile-page/profile-page.module';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RestorePasswordComponent } from './auth/restore-password/restore-password.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { LinkExpiredComponent } from './auth/link-expired/link-expired.component';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
import { ProjectsService } from './projects/projects.service';


//max test
import { MyUserService } from './myTest/my.service';
import { MyComponent } from './myTest/my.component';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    ProfilePageModule,
    ProjectsModule
  ],
  providers: [AuthService, MyUserService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
