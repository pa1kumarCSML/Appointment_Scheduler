import { Component } from '@angular/core';
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
    Status: Number
  }]

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getReqAppointments()
  }

  getReqAppointments() {
    this.appointmentService.getReqAppointments().subscribe((appointments) => {
      if (appointments) {
        this.Appointments = appointments
      }
    })
  }

  deleteBooking(id: any) {
    this.appointmentService.deleteReqAppointment(id)
      .subscribe((data) => {
        this.getReqAppointments();
      })
  }

}
