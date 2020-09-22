import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './common/header/header.component';
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';

const routes: Routes = [
	{ path: 'home', component: HeaderComponent },
	{ path: 'consumerops/registration', component: RegistrationComponent },
	{ path: 'registration/add-registration', component: AddRegistrationComponent },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
