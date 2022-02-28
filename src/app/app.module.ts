import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTablesModule } from 'angular-datatables';
import { FacebookIntegrationComponent } from './components/facebook-integration/facebook-integration.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DataTableComponent,
    UserDetailComponent,
    HeaderComponent,
    FacebookIntegrationComponent,
    RecaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
