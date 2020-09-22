
/* Angular's */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/* Other's */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ChartsModule } from 'ng2-charts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

/* Comopents */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { BentoMenuComponent } from './common/header/bento-menu/bento-menu.component';
import { ListViewComponent } from './common/list-view/list-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationDashboardComponent } from './registration/registration-dashboard/registration-dashboard.component';
import { RegistrationFiltersComponent } from './registration/registration-filters/registration-filters.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { FilterComponent } from './common/filter/filter.component';
import { SearchComponent } from './common/header/search/search.component';
import { AddComponent } from './common/header/add/add.component';
import { NotificationComponent } from './common/header/notification/notification.component';
import { LocationComponent } from './common/header/location/location.component';
import { ProfileComponent } from './common/header/profile/profile.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { BreadcrumbComponent } from './common/header/breadcrumb/breadcrumb.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    BentoMenuComponent,
    ListViewComponent,
    RegistrationComponent,
    RegistrationDashboardComponent,
    RegistrationFiltersComponent,
    DashboardComponent,
    FilterComponent,
    SearchComponent,
    AddComponent,
    NotificationComponent,
    LocationComponent,
    ProfileComponent,
    LoginLogoutComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    DataTablesModule,
    NgxDaterangepickerMd.forRoot(),
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
