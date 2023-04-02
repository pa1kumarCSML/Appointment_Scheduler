import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { BookSlotComponent } from '../book-slot/book-slot.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent {

  Appointments: any = [{
    DateTime: Date,
    Duration: Number,
    NoOfParticipants: Number,
    Description: String,
    Status: Number
  }]

  currentUser: any = null;

  constructor(private appointmentservice: AppointmentService) { }

  ngOnInit(): void {
    this.currentUser = this.appointmentservice.getCurrentUserDetails()
    this.appointmentservice.getAppointment().subscribe((data) => {
      if (data) {
        this.Appointments = data
        console.log(this.Appointments)
      }
    })
  }
}
