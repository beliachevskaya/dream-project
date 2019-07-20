import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './auth/start/start.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RestorePasswordComponent } from './auth/restore-password/restore-password.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { LinkExpiredComponent } from './auth/link-expired/link-expired.component';

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'restore-password', component: RestorePasswordComponent},
  { path: 'set-new-password', component: SetNewPasswordComponent},
  { path: 'link-expired', component: LinkExpiredComponent}
];
@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
