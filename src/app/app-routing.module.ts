import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './common/header/header.component';
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { TenantComponent } from './tenant/tenant.component';

const routes: Routes = [
	{ path: 'home', component: HeaderComponent },
	{ path: 'consumerops/registration', component: RegistrationComponent },
	{ path: 'registration/add-registration', component: AddRegistrationComponent },
	{ path: 'consumerops/registration', component: RegistrationComponent },
	{ path: 'login', component: LoginLogoutComponent },
	{ path: 'tenant', component: TenantComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
