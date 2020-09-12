
/* Angular's */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/* Other's */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Comopents */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { BentoMenuComponent } from './common/header/bento-menu/bento-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    BentoMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
