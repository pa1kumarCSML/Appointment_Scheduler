import { Component, EventEmitter, Output } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import * as moment from 'moment';
@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent {

  @Output() editSlot = new EventEmitter<Object>();

  Appointments: any = [{
    DateTime: Date,
    Duration: Number,
    NoOfParticipants: Number,
    Description: String,
    Status: Number,
    EndTime: Date,
    _id: String
  }]

  currentUser: any = null;

  constructor(private appointmentservice: AppointmentService) { }

  ngOnInit(): void {
    this.currentUser = this.appointmentservice.getCurrentUserDetails()
    this.getDetails();

  }
  getDetails() {
    this.appointmentservice.getAppointment().subscribe((data) => {
      if (data) {
        this.Appointments = data
        this.Appointments.forEach((appointment: any) => {
          let appDate = moment(appointment.DateTime, 'YYYY-MM-DD HH:mm');
          appointment["EndTime"] = appDate.add(appointment.Duration, 'minutes').format('YYYY-MM-DD HH:mm')
        });
      }
    })
  }

  deleteBooking(id: any) {
    this.appointmentservice.deleteDetails(id)
      .subscribe((data) => {
        this.getDetails();
      })
  }

  editBooking(id: any) {
    this.editSlot.emit({ edit: true, id: id, changeTo: "book" })
  }

}
