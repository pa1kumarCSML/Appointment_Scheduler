import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { HeaderComponent } from './header/header.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { CalenderComponent } from './appointment/calender/calender.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestComponent,
    HeaderComponent,
    CreateScheduleComponent,
    ScheduleListComponent,
    RequestListComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
