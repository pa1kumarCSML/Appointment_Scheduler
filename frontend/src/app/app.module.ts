import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { HeaderComponent } from './header/header.component';
import { CreateScheduleComponent } from './appointment/create-schedule/create-schedule.component';
import { ScheduleListComponent } from './appointment/schedule-list/schedule-list.component';
import { RequestListComponent } from './appointment/request-list/request-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestComponent,
    HeaderComponent,
    CreateScheduleComponent,
    ScheduleListComponent,
    RequestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
