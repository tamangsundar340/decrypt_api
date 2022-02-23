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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DataTableComponent,
    UserDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
