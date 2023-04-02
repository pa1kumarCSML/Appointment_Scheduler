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

  Appointment=[{
    Description: String,
    Duration: Number,
    NoOfParticipants:Number,
    DateTime: Date,
    userId: String
  }]

  constructor(private appointmentservice :AppointmentService ,private router:Router) { }

  ngOnInit(): void {
    let user_Id =localStorage.getItem("userId");
    console.log(user_Id);
     this.appointmentservice.getAppointment(user_Id).subscribe((data)=>{
       this.Appointment = JSON.parse(JSON.stringify(data));
       console.log(this.Appointment);
   })
}
}
