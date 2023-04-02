import { NgModule } from '@angular/core';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { AppointmentRequestsComponent } from './appointment-requests/appointment-requests.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';


@NgModule({
  declarations: [
    ScheduleComponent,
    ViewScheduleComponent,
    BookSlotComponent,
    AppointmentRequestsComponent,
    MyAppointmentsComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FormsModule
  ]
})
export class ScheduleModule { }
