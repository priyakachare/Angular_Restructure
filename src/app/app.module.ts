
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
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';
import { StepperFormComponent } from './common/stepper-form/stepper-form.component';
import { RegistrationListComponent } from './registration/registration-list/registration-list.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { BreadcrumbComponent } from './common/header/breadcrumb/breadcrumb.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationDetailViewComponent } from './registration/registration-detail-view/registration-detail-view.component';
import { ToolsComponent } from './common/tools/tools.component';
import { TenantComponent } from './tenant/tenant.component';
import { TenantSummaryComponent } from './tenant/tenant-summary/tenant-summary.component';
import { TenantFilterComponent } from './tenant/tenant-filter/tenant-filter.component';
import { TenantDatatableComponent } from './tenant/tenant-datatable/tenant-datatable.component';
import { MeterDataComponent } from './meter-data/meter-data.component';
import { ScheduleComponent } from './meter-data/schedule/schedule.component';
import { DispatchComponent } from './meter-data/dispatch/dispatch.component';
// import { ValidationComponent } from './meter-data/validation/validation.component';
import { UploadComponent } from './meter-data/upload/upload.component';
import { ScheduleDatatableComponent } from './meter-data/schedule/schedule-datatable/schedule-datatable.component';
import { ScheduleFilterComponent } from './meter-data/schedule/schedule-filter/schedule-filter.component';
import { ScheduleSummaryComponent } from './meter-data/schedule/schedule-summary/schedule-summary.component';
import { AddressDetailsComponent } from './common/address-details/address-details.component';
import { KycDetailsComponent } from './common/kyc-details/kyc-details.component';
import { PaymentDetailsComponent } from './common/payment-details/payment-details.component';
import { NoteDetailsComponent } from './common/note-details/note-details.component';
import { TimelineDetailsComponent } from './common/timeline-details/timeline-details.component';
import { ReadingComponent } from './meter-data/schedule/reading/reading.component';
import { BillDistributionComponent } from './meter-data/schedule/bill-distribution/bill-distribution.component';
import { NoticeComponent } from './meter-data/schedule/notice/notice.component';
import { ReadingDatatableComponent } from './meter-data/schedule/reading/reading-datatable/reading-datatable.component';
import { ReadingFilterComponent } from './meter-data/schedule/reading/reading-filter/reading-filter.component';
import { ReadingSummaryComponent } from './meter-data/schedule/reading/reading-summary/reading-summary.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignDatatableComponent } from './campaign/campaign-datatable/campaign-datatable.component';
import { CampaignFilterComponent } from './campaign/campaign-filter/campaign-filter.component';
import { CampaignSummaryComponent } from './campaign/campaign-summary/campaign-summary.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintAddComponent } from './complaint/complaint-add/complaint-add.component';
import { ComplaintListComponent } from './complaint/complaint-list/complaint-list.component';
import { ComplaintDashboardComponent } from './complaint/complaint-dashboard/complaint-dashboard.component';
import { ComplaintFiltersComponent } from './complaint/complaint-filters/complaint-filters.component';
import { ServicesComponent } from './services/services.component';
import { ServicesAddComponent } from './services/services-add/services-add.component';
import { ServicesDashboardComponent } from './services/services-dashboard/services-dashboard.component';
import { ServicesFiltersComponent } from './services/services-filters/services-filters.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ComplaintViewComponent } from './complaint/complaint-view/complaint-view.component';

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
    AddRegistrationComponent,
    StepperFormComponent,
    RegistrationListComponent,
    LoginLogoutComponent,
    BreadcrumbComponent,
    RegistrationDetailViewComponent,
    ToolsComponent,
    TenantComponent,
    TenantSummaryComponent,
    TenantFilterComponent,
    TenantDatatableComponent,
    MeterDataComponent,
    ScheduleComponent,
    DispatchComponent,
    // ValidationComponent,
    UploadComponent,
    ScheduleDatatableComponent,
    ScheduleFilterComponent,
    ScheduleSummaryComponent,
    AddressDetailsComponent,
    KycDetailsComponent,
    PaymentDetailsComponent,
    NoteDetailsComponent,
    TimelineDetailsComponent,
    ReadingComponent,
    BillDistributionComponent,
    NoticeComponent,
    ReadingDatatableComponent,
    ReadingFilterComponent,
    ReadingSummaryComponent,
    CampaignComponent,
    CampaignDatatableComponent,
    CampaignFilterComponent,
    CampaignSummaryComponent,
    ComplaintComponent,
    ComplaintAddComponent,
    ComplaintListComponent,
    ComplaintDashboardComponent,
    ComplaintFiltersComponent,
    ServicesComponent,
    ServicesAddComponent,
    ServicesDashboardComponent,
    ServicesFiltersComponent,
    ServicesListComponent,
    ComplaintViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    DataTablesModule,
    NgxDropzoneModule,
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
