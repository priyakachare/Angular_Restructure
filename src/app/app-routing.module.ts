import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './common/header/header.component';
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { RegistrationDetailViewComponent } from './registration/registration-detail-view/registration-detail-view.component';
import { TenantComponent } from './tenant/tenant.component';
import { ScheduleComponent } from './meter-data/schedule/schedule.component';

const routes: Routes = [
	{ path: 'home', component: HeaderComponent },
	{ path: 'consumerops/registration', component: RegistrationComponent },
	{ path: 'registration/add-registration', component: AddRegistrationComponent },
	{ path: 'registration/:id', component: RegistrationDetailViewComponent },
	{ path: 'login', component: LoginLogoutComponent },
	{ path: 'tenant', component: TenantComponent },
	{ path: 'meter-data/schedule', component: ScheduleComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
