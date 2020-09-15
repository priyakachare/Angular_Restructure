import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';

const routes: Routes = [
  { path: 'consumerops/registration', component: RegistrationComponent },
  { path: 'login', component: LoginLogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
