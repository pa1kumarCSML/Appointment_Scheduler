import { Component } from '@angular/core';
import * as moment from 'moment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-requests',
  templateUrl: './appointment-requests.component.html',
  styleUrls: ['./appointment-requests.component.css']
})
export class AppointmentRequestsComponent {

  Appointments: any = [{
    DateTime: Date,
    Duration: Number,
    NoOfParticipants: Number,
    Description: String,
    Status: Number,
    EndTime: Date
  }]

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getReqAppointments()
  }

  getReqAppointments() {
    this.appointmentService.getReqAppointments().subscribe((appointments) => {
      if (appointments) {
        this.Appointments = appointments
        this.Appointments.forEach((appointment: any) => {
          let appDate = moment(appointment.DateTime, 'YYYY-MM-DD HH:mm');
          appointment["EndTime"] = appDate.add(appointment.Duration, 'minutes').format('YYYY-MM-DD HH:mm')
        });
      }
    })
  }

  deleteBooking(id: any) {
    this.appointmentService.deleteReqAppointment(id)
      .subscribe((data) => {
        this.getReqAppointments();
      })
  }

  approveOrDeclineBooking(id: any, status: any) {
    this.appointmentService.updateReqAppointment(id, status)
      .subscribe((data) => {
        this.getReqAppointments();
      })
  }

}
