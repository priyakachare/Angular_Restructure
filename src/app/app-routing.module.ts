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
import { CommonComponent } from './common/common.component';
import { CampaignComponent } from './campaign/campaign.component';
import { UserComponent } from './user/user.component';
import { ResetPasswordComponent } from './login-logout/reset-password/reset-password.component';
import { ChangePasswordComponent } from './login-logout/change-password/change-password.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ServicesComponent } from './services/services.component';
import { UtilityComponent } from './utility/utility.component';
import { UtilityAddComponent } from './utility/utility-add/utility-add.component';
import { UtilityConfigurationComponent } from './admin/utility-configuration/utility-configuration.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'home', component: CommonComponent },
	{ path: 'consumerops/registration', component: RegistrationComponent },
	{ path: 'campaign', component: CampaignComponent },
	{ path: 'registration/add-registration', component: AddRegistrationComponent },
	{ path: 'registration/view', component: RegistrationDetailViewComponent },
	{ path: 'registration/:id', component: RegistrationDetailViewComponent },
	{ path: 'login', component: LoginLogoutComponent },
	{ path: 'tenant', component: TenantComponent },
	{ path: 'complaint', component: ComplaintComponent },
	{ path: 'complaint/:id', component: ComplaintComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'meter-data/schedule', component: ScheduleComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'utility', component: UtilityComponent },
	{ path: 'utility/add-utility', component: UtilityAddComponent },
	{ path: 'utility/configration', component: UtilityConfigurationComponent },
	{ path: 'reset-password/:<uidb64>/:<token>', component: ResetPasswordComponent },
	{ path: 'change-password', component: ChangePasswordComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
