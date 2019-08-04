import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RestorePasswordComponent } from './auth/restore-password/restore-password.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { LinkExpiredComponent } from './auth/link-expired/link-expired.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { PageComponent } from './core/page/page.component';
import { NextPageComponent } from './auth/next-page/next-page.component';
import { TimelogComponent } from './timelogs/timelog/timelog.component';

const itemMenu: Routes = [
  { path: 'company-settings', component: CompanySettingsComponent },
  { path: 'timelog-day', component: TimelogComponent }
];

const routes: Routes = [
  { path: '', component: PageComponent, children: itemMenu },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'set-new-password', component: SetNewPasswordComponent },
  { path: 'link-expired', component: LinkExpiredComponent },
  { path: 'next-page', component: NextPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}