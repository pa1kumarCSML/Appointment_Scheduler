import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

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
    Status: Number
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