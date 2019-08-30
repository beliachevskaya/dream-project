import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RestorePasswordComponent } from './auth/restore-password/restore-password.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { LinkExpiredComponent } from './auth/link-expired/link-expired.component';

import { AuthGuard } from './auth/auth.guard';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { PageComponent } from './core/page/page.component';
import { ProfileComponent } from './profile-page/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { TimelogDayComponent } from './timelogs/timelog-day/timelog-day.component';
import { TimelogWeekComponent } from './timelogs/timelog-week/timelog-week.component';

import { MyComponent } from './myTest/my.component';

const itemMenu: Routes = [
  { path: 'company-settings', component: CompanySettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'timelog-day', component: TimelogDayComponent },
  { path: 'timelog-week', component: TimelogWeekComponent },
  { path: 'employees', component: EmployeesComponent }
];

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: itemMenu,
    canActivate: [AuthGuard]
  },
  { path: 'test', component: MyComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'set-new-password', component: SetNewPasswordComponent },
  { path: 'link-expired', component: LinkExpiredComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
