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
    DateTime: this.getCurrentDateTime(),
    userId: localStorage.getItem("userId")
  }
  constructor(public appointmentService: AppointmentService) { }

  Addappointment() {
    this.appointmentService.NewAppointment(this.NewAppointment)
      .subscribe(data => {
        if (data) {
          //success
        } else {
          //error message
        }
      }
      )
  }

  getCurrentDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padZero(now.getMonth() + 1);
    const day = this.padZero(now.getDate());
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }

}
