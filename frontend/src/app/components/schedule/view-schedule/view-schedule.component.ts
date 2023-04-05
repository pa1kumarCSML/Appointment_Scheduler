import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})


export class ViewScheduleComponent {

  Appointments: any = [{
    DateTime: Date,
    Duration: Number,
    NoOfParticipants: Number,
    Description: String,
    Status: Number,
    EndTime: Date
  }]
  currentUser: any = null

  selectedDate: any = this.getCurrentDateTime()

  constructor(private appointmentService: AppointmentService) {
    this.currentUser = this.appointmentService.getCurrentUserDetails()
  }

  ngOnInit(): void {
    this.getAppointments()
  }


  getAppointments() {
    this.appointmentService.getAppointmentsForDate(this.selectedDate).subscribe(
      (appointments) => {
        this.Appointments = appointments;
        this.Appointments = this.Appointments.filter((appointment: any) => appointment.Status != 3)
        this.Appointments.forEach((appointment: any) => {
          let appDate = moment(appointment.DateTime, 'YYYY-MM-DD HH:mm');
          appointment["EndTime"] = appDate.add(appointment.Duration, 'minutes').format('YYYY-MM-DD HH:mm')
        });
      }
    );
  }


  getCurrentDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padZero(now.getMonth() + 1);
    const day = this.padZero(now.getDate());
    return `${year}-${month}-${day}`;
  }

  private padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }

  deleteBooking(id: any) {
    this.appointmentService.deleteDetails(id)
      .subscribe((data) => {
        this.getAppointments();
      })
  }

}