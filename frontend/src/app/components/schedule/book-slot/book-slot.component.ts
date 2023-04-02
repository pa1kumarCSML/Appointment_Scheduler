import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent {
  NewAppointment = {
    Description: '',
    Duration: 15,
    NoOfParticipants: 1,
    DateTime: '',
    userId: localStorage.getItem("userId")
  }
  constructor(public appointmentService: AppointmentService) { }
  ngOnInit(): void {
  }
  Addappointment() {
    //console.log("i");
    this.appointmentService.NewAppointment(this.NewAppointment);
    //console.log("Hii");
    //this.router.navigate(["login"]);
  }

}
