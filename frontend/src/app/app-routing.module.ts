import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'createSchedule', component: CreateScheduleComponent },
  { path: 'scheduleList', component: ScheduleListComponent },
  { path: 'requestList', component: RequestListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
